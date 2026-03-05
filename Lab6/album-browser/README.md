# Album Browser

Angular application for browsing albums and photos using the JSONPlaceholder API.

**Lab 6: Routing & HTTP** — Web Development course.

## How to Run

```bash
npm install
ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

## Features

- Browse 100 albums from JSONPlaceholder API
- View album details (id, title, userId)
- Edit album titles (PUT request)
- Delete albums from the list (DELETE request)
- View photo galleries for each album
- Navigation with Angular Router (routerLink, routerLinkActive)
- Loading indicators while fetching data

## Project Structure

- `src/app/models/` — Album and Photo interfaces
- `src/app/services/` — AlbumService (HttpClient API calls)
- `src/app/components/home/` — Welcome page
- `src/app/components/about/` — About page
- `src/app/components/albums/` — Album list view
- `src/app/components/album-detail/` — Album detail with edit
- `src/app/components/album-photos/` — Photo gallery grid

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | — | Redirects to `/home` |
| `/home` | Home | Welcome page |
| `/about` | About | About page |
| `/albums` | Albums | Album list |
| `/albums/:id` | AlbumDetail | Album details & edit |
| `/albums/:id/photos` | AlbumPhotos | Photo gallery |
