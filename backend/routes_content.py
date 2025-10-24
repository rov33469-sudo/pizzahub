from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid


def make_router(db):
    router = APIRouter()

    # ---------- Schemas ----------
    class MenuItem(BaseModel):
        id: str = Field(default_factory=lambda: str(uuid.uuid4()))
        name: str
        price: float
        category: str
        img: str
        desc: str

    class MenuResponse(BaseModel):
        items: List[MenuItem]

    class Special(BaseModel):
        name: str
        price: float
        desc: str
        img: str

    class Review(BaseModel):
        id: str = Field(default_factory=lambda: str(uuid.uuid4()))
        name: str
        rating: int
        text: str
        avatar: str
        type: str = "customer"  # or blogger

    class ReviewsResponse(BaseModel):
        items: List[Review]

    class TimelineEvent(BaseModel):
        year: int
        title: str
        text: str
        img: str

    class TimelineResponse(BaseModel):
        items: List[TimelineEvent]

    class Video(BaseModel):
        url: str
        caption: Optional[str] = None

    class Assets(BaseModel):
        menu_pdf_url: str

    class ContactMessageCreate(BaseModel):
        name: str
        email: str
        message: str

    class ContactMessageOut(BaseModel):
        id: str
        name: str
        email: str
        message: str
        ts: datetime

    class BookingCreate(BaseModel):
        name: str
        email: Optional[str] = None
        phone: Optional[str] = None
        party_size: Optional[int] = None
        when: Optional[str] = None
        note: Optional[str] = None

    class BookingOut(BaseModel):
        id: str
        status: str

    # ---------- Endpoints ----------
    @router.get("/menu", response_model=MenuResponse)
    async def get_menu():
        items = await db.menu_items.find().to_list(1000)
        return {"items": items}

    @router.get("/chefs-choice", response_model=MenuResponse)
    async def get_chefs_choice():
        items = await db.chefs_choice.find().to_list(100)
        return {"items": items}

    @router.get("/special", response_model=Special)
    async def get_special():
        item = await db.specials.find_one({})
        if not item:
            raise HTTPException(status_code=404, detail="Special not set")
        return item

    @router.get("/reviews", response_model=ReviewsResponse)
    async def get_reviews():
        items = await db.reviews.find().to_list(1000)
        return {"items": items}

    @router.get("/timeline", response_model=TimelineResponse)
    async def get_timeline():
        items = await db.timeline.find().to_list(1000)
        return {"items": items}

    @router.get("/video", response_model=Video)
    async def get_video():
        v = await db.video.find_one({})
        if not v:
            raise HTTPException(status_code=404, detail="Video not set")
        return v

    @router.get("/assets", response_model=Assets)
    async def get_assets():
        a = await db.assets.find_one({})
        if not a:
            raise HTTPException(status_code=404, detail="Assets not set")
        return a

    @router.post("/contact-messages", response_model=ContactMessageOut)
    async def create_contact_message(payload: ContactMessageCreate):
        out = {
            "id": str(uuid.uuid4()),
            "name": payload.name,
            "email": payload.email,
            "message": payload.message,
            "ts": datetime.utcnow(),
        }
        await db.contact_messages.insert_one(out)
        return out

    @router.post("/bookings", response_model=BookingOut)
    async def create_booking(payload: BookingCreate):
        out = {"id": str(uuid.uuid4()), "status": "received", **payload.model_dump()}
        await db.bookings.insert_one(out)
        return {"id": out["id"], "status": "received"}

    return router
