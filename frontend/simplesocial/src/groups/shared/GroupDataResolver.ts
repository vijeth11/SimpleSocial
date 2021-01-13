import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from './../../post/shared/post.interface';
import { PostdataService } from './../../post/shared/postdata.service';
@Injectable({ providedIn: 'root' })
export class GroupDataResolver implements Resolve<Post[]> {
  constructor(private service: PostdataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.service.getPostList();
  }
}