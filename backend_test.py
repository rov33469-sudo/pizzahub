#!/usr/bin/env python3
"""
Backend API Testing for Rony's Pizza Hub
Tests all FastAPI endpoints according to the review request specifications.
"""

import requests
import json
from datetime import datetime
import sys

# Get backend URL from frontend env
BACKEND_URL = "https://pizza-portfolio.preview.emergentagent.com/api"

def test_health_endpoint():
    """Test GET /api/ -> expect {"message":"Hello World"}"""
    print("🔍 Testing Health Endpoint...")
    try:
        response = requests.get(f"{BACKEND_URL}/")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Response: {data}")
            
            if data.get("message") == "Hello World":
                print("✅ Health endpoint working correctly")
                return True
            else:
                print(f"❌ Health endpoint returned wrong message: {data}")
                return False
        else:
            print(f"❌ Health endpoint failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Health endpoint error: {str(e)}")
        return False

def test_menu_endpoint():
    """Test GET /api/menu -> items > 5, categories include classic, specials, sides, drinks, desserts"""
    print("\n🔍 Testing Menu Endpoint...")
    try:
        response = requests.get(f"{BACKEND_URL}/menu")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            items = data.get("items", [])
            print(f"Number of menu items: {len(items)}")
            
            # Check if items > 5
            if len(items) <= 5:
                print(f"❌ Menu has {len(items)} items, expected > 5")
                return False
            
            # Check categories
            categories = set(item.get("category") for item in items)
            expected_categories = {"classic", "specials", "sides", "drinks", "desserts"}
            print(f"Found categories: {categories}")
            
            missing_categories = expected_categories - categories
            if missing_categories:
                print(f"❌ Missing categories: {missing_categories}")
                return False
            
            print("✅ Menu endpoint working correctly")
            return True
        else:
            print(f"❌ Menu endpoint failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Menu endpoint error: {str(e)}")
        return False

def test_chefs_choice_endpoint():
    """Test GET /api/chefs-choice -> items >= 3"""
    print("\n🔍 Testing Chef's Choice Endpoint...")
    try:
        response = requests.get(f"{BACKEND_URL}/chefs-choice")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            items = data.get("items", [])
            print(f"Number of chef's choice items: {len(items)}")
            
            if len(items) >= 3:
                print("✅ Chef's choice endpoint working correctly")
                return True
            else:
                print(f"❌ Chef's choice has {len(items)} items, expected >= 3")
                return False
        else:
            print(f"❌ Chef's choice endpoint failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Chef's choice endpoint error: {str(e)}")
        return False

def test_special_endpoint():
    """Test GET /api/special -> object with name, price, img"""
    print("\n🔍 Testing Special Endpoint...")
    try:
        response = requests.get(f"{BACKEND_URL}/special")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Special data: {data}")
            
            required_fields = ["name", "price", "img"]
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                print(f"❌ Special missing required fields: {missing_fields}")
                return False
            
            print("✅ Special endpoint working correctly")
            return True
        else:
            print(f"❌ Special endpoint failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Special endpoint error: {str(e)}")
        return False

def test_reviews_endpoint():
    """Test GET /api/reviews -> items >= 4 and include type=customer and type=blogger"""
    print("\n🔍 Testing Reviews Endpoint...")
    try:
        response = requests.get(f"{BACKEND_URL}/reviews")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            items = data.get("items", [])
            print(f"Number of reviews: {len(items)}")
            
            if len(items) < 4:
                print(f"❌ Reviews has {len(items)} items, expected >= 4")
                return False
            
            # Check review types
            types = set(item.get("type") for item in items)
            print(f"Found review types: {types}")
            
            if "customer" not in types or "blogger" not in types:
                print(f"❌ Reviews missing required types. Found: {types}, expected: customer and blogger")
                return False
            
            print("✅ Reviews endpoint working correctly")
            return True
        else:
            print(f"❌ Reviews endpoint failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Reviews endpoint error: {str(e)}")
        return False

def test_timeline_endpoint():
    """Test GET /api/timeline -> items >= 4 in ascending years"""
    print("\n🔍 Testing Timeline Endpoint...")
    try:
        response = requests.get(f"{BACKEND_URL}/timeline")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            items = data.get("items", [])
            print(f"Number of timeline items: {len(items)}")
            
            if len(items) < 4:
                print(f"❌ Timeline has {len(items)} items, expected >= 4")
                return False
            
            # Check if years are in ascending order
            years = [item.get("year") for item in items if "year" in item]
            print(f"Timeline years: {years}")
            
            if years != sorted(years):
                print(f"❌ Timeline years not in ascending order: {years}")
                return False
            
            print("✅ Timeline endpoint working correctly")
            return True
        else:
            print(f"❌ Timeline endpoint failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Timeline endpoint error: {str(e)}")
        return False

def test_video_endpoint():
    """Test GET /api/video -> url contains youtube"""
    print("\n🔍 Testing Video Endpoint...")
    try:
        response = requests.get(f"{BACKEND_URL}/video")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            url = data.get("url", "")
            print(f"Video URL: {url}")
            
            if "youtube" in url.lower():
                print("✅ Video endpoint working correctly")
                return True
            else:
                print(f"❌ Video URL does not contain 'youtube': {url}")
                return False
        else:
            print(f"❌ Video endpoint failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Video endpoint error: {str(e)}")
        return False

def test_assets_endpoint():
    """Test GET /api/assets -> contains menu_pdf_url"""
    print("\n🔍 Testing Assets Endpoint...")
    try:
        response = requests.get(f"{BACKEND_URL}/assets")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Assets data: {data}")
            
            if "menu_pdf_url" in data:
                print("✅ Assets endpoint working correctly")
                return True
            else:
                print(f"❌ Assets missing menu_pdf_url field")
                return False
        else:
            print(f"❌ Assets endpoint failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Assets endpoint error: {str(e)}")
        return False

def test_contact_messages_endpoint():
    """Test POST /api/contact-messages with sample payload -> 200 and returns id, ts"""
    print("\n🔍 Testing Contact Messages Endpoint...")
    try:
        payload = {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "message": "I love your pizza! When are you opening a new location?"
        }
        
        response = requests.post(f"{BACKEND_URL}/contact-messages", json=payload)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Contact message response: {data}")
            
            required_fields = ["id", "ts"]
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                print(f"❌ Contact message response missing fields: {missing_fields}")
                return False
            
            print("✅ Contact messages endpoint working correctly")
            return True
        else:
            print(f"❌ Contact messages endpoint failed with status {response.status_code}")
            try:
                print(f"Error response: {response.text}")
            except:
                pass
            return False
            
    except Exception as e:
        print(f"❌ Contact messages endpoint error: {str(e)}")
        return False

def test_bookings_endpoint():
    """Test POST /api/bookings with sample payload -> status=received"""
    print("\n🔍 Testing Bookings Endpoint...")
    try:
        payload = {
            "name": "Jane Smith",
            "email": "jane.smith@example.com",
            "phone": "+91-9876543210",
            "party_size": 4,
            "when": "2024-01-15 19:30",
            "note": "Birthday celebration, please arrange a corner table"
        }
        
        response = requests.post(f"{BACKEND_URL}/bookings", json=payload)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Booking response: {data}")
            
            if data.get("status") == "received":
                print("✅ Bookings endpoint working correctly")
                return True
            else:
                print(f"❌ Booking status is not 'received': {data.get('status')}")
                return False
        else:
            print(f"❌ Bookings endpoint failed with status {response.status_code}")
            try:
                print(f"Error response: {response.text}")
            except:
                pass
            return False
            
    except Exception as e:
        print(f"❌ Bookings endpoint error: {str(e)}")
        return False

def main():
    """Run all backend tests"""
    print("🚀 Starting Backend API Tests for Rony's Pizza Hub")
    print(f"Backend URL: {BACKEND_URL}")
    print("=" * 60)
    
    tests = [
        ("Health Endpoint", test_health_endpoint),
        ("Menu Endpoint", test_menu_endpoint),
        ("Chef's Choice Endpoint", test_chefs_choice_endpoint),
        ("Special Endpoint", test_special_endpoint),
        ("Reviews Endpoint", test_reviews_endpoint),
        ("Timeline Endpoint", test_timeline_endpoint),
        ("Video Endpoint", test_video_endpoint),
        ("Assets Endpoint", test_assets_endpoint),
        ("Contact Messages Endpoint", test_contact_messages_endpoint),
        ("Bookings Endpoint", test_bookings_endpoint),
    ]
    
    results = []
    
    for test_name, test_func in tests:
        try:
            result = test_func()
            results.append((test_name, result))
        except Exception as e:
            print(f"❌ {test_name} failed with exception: {str(e)}")
            results.append((test_name, False))
    
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = 0
    failed = 0
    
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status} - {test_name}")
        if result:
            passed += 1
        else:
            failed += 1
    
    print(f"\nTotal Tests: {len(results)}")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    
    if failed == 0:
        print("\n🎉 All tests passed!")
        return 0
    else:
        print(f"\n⚠️  {failed} test(s) failed!")
        return 1

if __name__ == "__main__":
    sys.exit(main())