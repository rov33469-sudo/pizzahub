# API Contracts — Rony’s Pizza Hub

This file documents the initial API for replacing frontend mocks. All backend routes are prefixed with /api.

Base URL (frontend uses from env): `${REACT_APP_BACKEND_URL}/api`

Collections (Mongo): menu_items, specials, reviews, timeline, chefs_choice, assets, contact_messages, bookings, video

---

## 1) Menu
- GET /api/menu → 200 OK
  Response: { items: MenuItem[] }
  MenuItem: { id: string, name: string, price: number, category: "classic"|"specials"|"sides"|"drinks"|"desserts", img: string, desc: string }

## 2) Chef’s Choice
- GET /api/chefs-choice → 200 OK
  Response: { items: MenuItem[] }

## 3) Special of the Day
- GET /api/special → 200 OK
  Response: { name: string, price: number, desc: string, img: string }

## 4) Reviews (customers + bloggers)
- GET /api/reviews → 200 OK
  Response: { items: Review[] }
  Review: { id: string, name: string, rating: number, text: string, avatar: string, type: "customer"|"blogger" }

## 5) Timeline (Journey)
- GET /api/timeline → 200 OK
  Response: { items: TimelineEvent[] }
  TimelineEvent: { year: number, title: string, text: string, img: string }

## 6) Video (Behind the Oven)
- GET /api/video → 200 OK
  Response: { url: string, caption: string }

## 7) Assets
- GET /api/assets → 200 OK
  Response: { menu_pdf_url: string }

## 8) Contact Messages
- POST /api/contact-messages
  Request: { name: string, email: string, message: string }
  Response: { id: string, name: string, email: string, message: string, ts: string }

## 9) Bookings (optional for CTA)
- POST /api/bookings
  Request: { name: string, email?: string, phone?: string, party_size?: number, when?: string, note?: string }
  Response: { id: string, status: "received" }

---

Seeding: On first startup, backend seeds collections with the same values used in the current frontend mocks so the site has data immediately. Frontend will then fetch these endpoints and stop using /src/mock/mock.js.

Integration plan:
1) Implement endpoints above (done in backend).
2) Replace React mocks with SWR/axios fetchers per section:
   - MenuGrid → GET /api/menu + local category filtering
   - Chef’s Choice → GET /api/chefs-choice
   - Reviews → GET /api/reviews
   - Timeline → GET /api/timeline
   - Video → GET /api/video
   - Special → GET /api/special
   - Download Menu → /api/assets (menu_pdf_url)
   - Contact Form → POST /api/contact-messages
   - Book Table CTA (optional modal) → POST /api/bookings
3) Remove /src/mock/mock.js after integration.

Notes:
- All responses are JSON; times in ISO8601 UTC.
- Errors: 400 for validation issues; 500 on server errors.
- CORS: wildcard enabled.
