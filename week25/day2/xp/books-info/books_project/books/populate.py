import os
import sys
from django.core.wsgi import get_wsgi_application

sys.path.append("../")  # Add the parent directory to the Python path
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'books_project.settings')
application = get_wsgi_application()

from datetime import datetime
from books.models import Book

import requests

def populate_books():

    try:
        response = requests.get('https://www.googleapis.com/books/v1/volumes?q=river')
        data = response.json()

        for item in data['items']:
            volume_info = item.get('volumeInfo', {})
            title = volume_info.get('title', '')
            author = ', '.join(volume_info.get('authors', []))
            published_date_str = volume_info.get('publishedDate', '')
            print(published_date_str)
            published_date = datetime.strptime(published_date_str, '%Y-%m-%d').date() if published_date_str else None
            description = volume_info.get('description', '')
            page_count = volume_info.get('pageCount', 0)
            categories = ', '.join(volume_info.get('categories', []))
            thumbnail_url = volume_info.get('imageLinks', {}).get('thumbnail', '')

            Book.objects.create(
                title=title,
                author=author,
                published_date=published_date,
                description=description,
                page_count=page_count,
                categories=categories,
                thumbnail_url=thumbnail_url,
            )

    except Exception as e:
        print(f"Error: {e}")


populate_books()


