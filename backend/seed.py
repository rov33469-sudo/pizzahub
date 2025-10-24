import uuid
from datetime import datetime

# Seed data matching the current frontend mock

def seed_data_dict():
    IMAGES = {
        "heroChef": "https://images.unsplash.com/photo-1572552635104-daf938e0aa1f",
        "heroFire": "https://images.unsplash.com/photo-1622880833523-7cf1c0bd4296",
        "pizzaClose1": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
        "pizzaClose2": "https://images.unsplash.com/photo-1598023696416-0193a0bcd302",
        "garlicBread": "https://images.unsplash.com/photo-1573140401552-3fab0b24306f",
        "tiramisu": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
    }

    menu_items = [
        {"id": str(uuid.uuid4()), "name": "Margherita", "price": 299, "category": "classic", "img": IMAGES["pizzaClose1"], "desc": "San Marzano tomatoes, fior di latte, basil."},
        {"id": str(uuid.uuid4()), "name": "Farmhouse", "price": 349, "category": "classic", "img": IMAGES["pizzaClose2"], "desc": "Onions, capsicum, mushrooms, sweet corn."},
        {"id": str(uuid.uuid4()), "name": "Pepperoni", "price": 399, "category": "classic", "img": IMAGES["pizzaClose2"], "desc": "Spicy pepperoni, mozzarella, oregano."},
        {"id": str(uuid.uuid4()), "name": "Truffle Funghi", "price": 499, "category": "specials", "img": IMAGES["pizzaClose1"], "desc": "Wild mushrooms, truffle oil, parmesan."},
        {"id": str(uuid.uuid4()), "name": "Bombay Heat", "price": 459, "category": "specials", "img": IMAGES["pizzaClose2"], "desc": "Tandoori chicken, jalapeño, chilli oil."},
        {"id": str(uuid.uuid4()), "name": "Garlic Bread Basket", "price": 159, "category": "sides", "img": IMAGES["garlicBread"], "desc": "Buttery, herby, perfectly toasted."},
        {"id": str(uuid.uuid4()), "name": "Cheesy Dip", "price": 79, "category": "sides", "img": IMAGES["pizzaClose1"], "desc": "Silky, indulgent cheese dip."},
        {"id": str(uuid.uuid4()), "name": "Homemade Lemonade", "price": 99, "category": "drinks", "img": IMAGES["pizzaClose1"], "desc": "Fresh, zesty and cool."},
        {"id": str(uuid.uuid4()), "name": "Iced Tea (Peach)", "price": 129, "category": "drinks", "img": IMAGES["pizzaClose2"], "desc": "Lightly sweet, aromatic."},
        {"id": str(uuid.uuid4()), "name": "Classic Tiramisu", "price": 249, "category": "desserts", "img": IMAGES["tiramisu"], "desc": "Cocoa, mascarpone, espresso."},
    ]

    chefs_choice = [
        {"id": str(uuid.uuid4()), "name": "Truffle Funghi", "price": 499, "category": "specials", "img": IMAGES["pizzaClose1"], "desc": "Wild mushrooms, truffle oil, parmesan."},
        {"id": str(uuid.uuid4()), "name": "Bombay Heat", "price": 459, "category": "specials", "img": IMAGES["pizzaClose2"], "desc": "Tandoori chicken, jalapeño, chilli oil."},
        {"id": str(uuid.uuid4()), "name": "Burrata Margherita", "price": 529, "category": "specials", "img": IMAGES["pizzaClose1"], "desc": "Creamy burrata, basil oil, San Marzano base."},
    ]

    reviews = [
        {"id": str(uuid.uuid4()), "name": "Ananya M.", "rating": 5, "text": "Best wood-fired crust in Mumbai. The truffle funghi blew my mind!", "avatar": "https://i.pravatar.cc/100?img=12", "type": "customer"},
        {"id": str(uuid.uuid4()), "name": "Rahul S.", "rating": 5, "text": "Super fresh ingredients and warm service. Totally recommend!", "avatar": "https://i.pravatar.cc/100?img=5", "type": "customer"},
        {"id": str(uuid.uuid4()), "name": "Sana K.", "rating": 4, "text": "Margherita is perfection. Simple and so flavorful.", "avatar": "https://i.pravatar.cc/100?img=8", "type": "customer"},
        {"id": str(uuid.uuid4()), "name": "Karan P.", "rating": 5, "text": "Ordered for a party, everyone loved the Bombay Heat!", "avatar": "https://i.pravatar.cc/100?img=18", "type": "customer"},
        {"id": str(uuid.uuid4()), "name": "FoodieMumbai", "rating": 5, "text": "Rony’s wood-fired pies are the city’s hidden gem—charred just right, toppings that sing.", "avatar": "https://i.pravatar.cc/100?img=30", "type": "blogger"},
        {"id": str(uuid.uuid4()), "name": "SliceOfLife Blog", "rating": 5, "text": "Truffle Funghi is a masterpiece. Balanced, aromatic, unforgettable.", "avatar": "https://i.pravatar.cc/100?img=16", "type": "blogger"},
    ]

    timeline = [
        {"year": 2015, "title": "First Oven", "text": "Started with a tiny backyard oven and neighborhood tastings.", "img": IMAGES["heroChef"]},
        {"year": 2018, "title": "Pop-up Nights", "text": "Weekend pop-ups grew a loyal base; perfected slow-fermented dough.", "img": IMAGES["pizzaClose2"]},
        {"year": 2021, "title": "Rony’s Pizza Hub", "text": "Opened our cozy hub in Andheri West with a wood-fired oven.", "img": IMAGES["heroFire"]},
        {"year": 2024, "title": "30+ Varieties", "text": "Seasonal specials, collabs, and chef’s tasting menus.", "img": IMAGES["pizzaClose1"]},
        {"year": 2025, "title": "Community Favorite", "text": "1000+ happy customers and counting.", "img": IMAGES["garlicBread"]},
    ]

    special = {"name": "Wood-Fired Burrata Margherita", "price": 529, "desc": "Silky burrata on blistered San Marzano base, basil oil drizzle.", "img": IMAGES["pizzaClose1"]}

    video = {"url": "https://www.youtube.com/embed/3AAdKl1UYZs", "caption": "From dough to fire — a peek into our wood-fired ritual."}

    assets = {"menu_pdf_url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"}

    return {
        "menu_items": menu_items,
        "chefs_choice": chefs_choice,
        "reviews": reviews,
        "timeline": timeline,
        "special": special,
        "video": video,
        "assets": assets,
    }


async def seed_if_empty(db):
    data = seed_data_dict()

    if await db.menu_items.count_documents({}) == 0:
        await db.menu_items.insert_many(data["menu_items"])  # type: ignore
    if await db.chefs_choice.count_documents({}) == 0:
        await db.chefs_choice.insert_many(data["chefs_choice"])  # type: ignore
    if await db.reviews.count_documents({}) == 0:
        await db.reviews.insert_many(data["reviews"])  # type: ignore
    if not await db.specials.find_one({}):
        await db.specials.insert_one(data["special"])  # type: ignore
    if not await db.video.find_one({}):
        await db.video.insert_one(data["video"])  # type: ignore
    if not await db.assets.find_one({}):
        await db.assets.insert_one(data["assets"])  # type: ignore
    if await db.timeline.count_documents({}) == 0:
        await db.timeline.insert_many(data["timeline"])  # type: ignore

    # Ensure indexes (simple ones)
    await db.menu_items.create_index("category")
    await db.reviews.create_index("type")
