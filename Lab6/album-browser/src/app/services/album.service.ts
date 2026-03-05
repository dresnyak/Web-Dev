import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}/albums/${id}/photos`).pipe(
      map((photos) =>
        photos.map((p) => ({
          ...p,
          url: p.url.replace('via.placeholder.com', 'dummyimage.com'),
          thumbnailUrl: p.thumbnailUrl.replace('via.placeholder.com', 'dummyimage.com'),
        }))
      )
    );
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/albums/${id}`);
  }
}
