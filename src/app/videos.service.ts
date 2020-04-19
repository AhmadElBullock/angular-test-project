import { Injectable, OnInit } from '@angular/core';
import { VIDEOS} from './VIDOES'
import { Video } from './video.interface';

@Injectable({
  providedIn: 'root'
})
export class VideosService implements OnInit {
  
  videos: Video[] = VIDEOS;
  videosByViewsToglle: boolean = true;
  videosBylikesToglle: boolean = true;

  constructor() {}
  ngOnInit() {  }

  viewsSort() {
    if(this.videosByViewsToglle) {
      this.videos.sort((v1,v2) => {
        if (v1.views > v2.views) {
            return -1;
        }
        if (v1.views < v2.views) {
            return 1;
        }
        return 0;
      });
      
    } else {
      this.videos.sort((v1,v2) => {
        if (v1.views > v2.views) {
            return 1;
        }
        if (v1.views < v2.views) {
            return -1;
        }
        return 0;
      });
    }
    this.videosByViewsToglle = !this.videosByViewsToglle
  }

  likesSort() {
    if(this.videosBylikesToglle) {
      this.videos.sort((v1,v2) => {
        if (v1.likes > v2.likes) {
            return -1;
        }
        if (v1.likes < v2.likes) {
            return 1;
        }
        return 0;
      });
      
    } else {
      this.videos.sort((v1,v2) => {
        if (v1.likes > v2.likes) {
            return 1;
        }
        if (v1.likes < v2.likes) {
            return -1;
        }
        return 0;
      });
    }
    this.videosBylikesToglle = !this.videosBylikesToglle
  }

 







}
