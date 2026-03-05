import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Album } from '../../models/album';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  imports: [RouterLink, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail implements OnInit {
  album = signal<Album | null>(null);
  editTitle = '';
  loading = signal(true);
  saving = signal(false);
  saved = signal(false);

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (album) => {
        this.album.set(album);
        this.editTitle = album.title;
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      },
    });
  }

  saveTitle(): void {
    const current = this.album();
    if (!current) return;
    this.saving.set(true);
    this.saved.set(false);
    const updated: Album = { ...current, title: this.editTitle };
    this.albumService.updateAlbum(updated).subscribe({
      next: (album) => {
        this.album.set(album);
        this.saving.set(false);
        this.saved.set(true);
      },
      error: () => {
        this.saving.set(false);
      },
    });
  }
}
