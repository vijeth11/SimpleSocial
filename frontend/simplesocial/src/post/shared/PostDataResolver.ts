import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from './post.interface';
import { PostdataService } from './postdata.service';
@Injectable({ providedIn: 'root' })
export class PostDataResolver implements Resolve<Post[]> {
  constructor(private service: PostdataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.service.getPostList();
  }
}