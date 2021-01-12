(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,t,n){e.exports=n("zUnb")},"0KVQ":function(e,t){e.exports='<div class="container">\n <div *ngIf="registerView" class="justify-content-center">\n    <h1>Sign Up</h1>\n    <form [formGroup]="registerForm" (ngSubmit)="onRegister(registerForm)">\n      <label>Username:\n        <input type="text" formControlName="username"/>\n      </label>\n      <label>Email\n        <input type="email" formControlName="email"/>\n      </label>\n      <label> Password \n        <input type="password" formControlName="password" >\n      </label>\n      <label> confirm Password\n        <input type="password" formControlName="password1">\n      </label>\n      <button type="submit" [disabled]="!registerForm?.valid">Submit</button>\n    </form>\n  </div>\n  <div *ngIf="!registerView" class="justify-content-center">\n    <h1>Login</h1>\n    <form [formGroup]="loginForm" (ngSubmit)="onLogin(loginForm)">\n      <label> Username or Email\n        <input type="text" formControlName="username">\n      </label>\n      <label> Password\n        <input type="password" formControlName="password"/>\n      </label>\n      <button type="submit" [disabled]="!loginForm?.valid">Login</button>\n      <button type="button" (onclick)="registerView=true">Register</button>\n    </form>\n    \n  </div>\n</div>\n'},"8LqL":function(e,t){e.exports=".list-group-item{\r\n    text-decoration: none;\r\n    color:black;\r\n}\r\n\r\n.list-group-item:hover{\r\n    cursor: default;\r\n}\r\n\r\n.title{\r\n    color:blue;\r\n    text-decoration: underline;\r\n}\r\n\r\n.title:hover{\r\n    cursor:pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9ncm91cHMvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtDQUM5Qjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2dyb3Vwcy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwLWl0ZW17XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbTpob3ZlcntcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udGl0bGU6aG92ZXJ7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufSJdfQ== */"},A3xY:function(e,t){e.exports="\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"},AOEa:function(e,t){e.exports='<div class="post=-page">\n  <div class="container">\n    <div class="row">\n      <div class="col-md-4">\n        <h1>@Place Post username</h1>\n      </div>\n      <div class="col-md-8">\n        <post-detail *ngFor="let post of posts" [post]="post"></post-detail>\n      </div>\n    </div>\n  </div>\n</div>'},Cz5e:function(e,t){e.exports='<div class="group-page">\n  <div class="container">\n    <div class="row">\n      <div class="col-md-8">\n        <h4 *ngIf = "type==\'create\'">Create New Group</h4>\n        <h4 *ngIf = "type==\'update\'">Update Group</h4>\n        <form  [formGroup]="createGroupForm" (ngSubmit)="onCreate(createGroupForm)">\n            <label>Name:\n              <input type="text" formControlName="name"/>\n            </label>\n            <label>Description\n              <input type="text" formControlName="description"/>\n            </label>\n            \x3c!--Create a drop down for selecting members--\x3e\n            <input type="submit" class="btn btn-primary" value="Submit">\n        </form>\n      </div>\n    </div>\n    <div class="row" *ngIf="displaySuccessMessage">\n      <div class="col-md-12 success">\n        <h1>Success fully {{type}}ed</h1>\n      </div>\n    </div>\n  </div>\n</div>\n\n'},GoAk:function(e,t){e.exports='<div class="group-page">\n  <div class="container">\n    <div class="row">\n      \x3c!--Group Name from backend--\x3e\n        <div class="col-md-8">\n          <h1> {{group?.name}} </h1>\n          <br>\n          <h2>Member Count : {{group?.members?.length}}</h2>\n          <br>\n          <div class="content">\n            <ng-template [ngIf]="userInCurrentGroup">\n              \x3c!-- pass group slug to leave url--\x3e\n              <button (click)="leaveGroup(group.id,$event)" class = "btn btn-lg btn-fill btn-warning"> \n                Group Leave <span class="glyphicon glyphicon-remove-circle"></span>\n              </button>\n              <a *ngIf="isLoggedInUserAdmin()" [routerLink]="[\'../../../\',\'group\',\'update\',{\'id\':group.id}]" class = "btn btn-lg btn-fill btn-warning"> \n                Group Update <span class="glyphicon glyphicon-remove-circle"></span>\n              </a>\n              <a *ngIf="userInCurrentGroup" [routerLink]="[\'../../../\',\'post\',\'create\',{\'groupId\':group.id,\'type\':\'create\'}]" class = "btn btn-lg btn-fill btn-warning"> \n                Post In Group <span class="glyphicon glyphicon-remove-circle"></span>\n              </a>\n              <button *ngIf="isLoggedInUserAdmin()" (click)="deleteGroup(group.id)" class = "btn btn-lg btn-fill btn-danger"> \n                Group Delete <span class="glyphicon glyphicon-remove-circle"></span>\n              </button>\n            </ng-template>\n            <ng-template [ngIf]="!userInCurrentGroup">\n              \x3c!-- pass group slug to join url--\x3e\n              <button  class = "btn btn-lg btn-fill btn-warning" (click)="joinGroup(group.id)"> \n                  Group Join <span class="glyphicon glyphicon-ok-circle"></span>\n              </button>\n            </ng-template>\n          </div>\n        </div>\n\n      <div class="row">\n        <div class = "col-md-8">\n          <ul *ngIf="posts.length > 0;else noPostMessage">\n              <post-list></post-list>\n          </ul>\n          <ng-template #noPostMessage>\n            <h2>No posts in this group yet!</h2>\n          </ng-template>          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>'},KIWm:function(e,t){e.exports=".post{\r\n    border: 2px solid black;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3N0L2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9wb3N0L2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0e1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"},KnAe:function(e,t){e.exports="\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcG9zdC9saXN0L2xpc3QuY29tcG9uZW50LmNzcyJ9 */"},P7jh:function(e,t){e.exports='<div class="group-page">\n  <div class="container">\n    <div class="row">\n      <div class="col-md-4">\n        <div class="content">\n            <ng-template [ngIf]="userIsAuthenticated">\n              <h2>Welcome Back!</h2>\n              \x3c!-- take to posts of the user on click--\x3e\n              <a href="">\n                @{{username}}\n              </a>\n            </ng-template>\n            <h2>Groups</h2>\n            <p>Welcome to the groups page!</p>\n            <ng-template [ngIf]="userIsAuthenticated">\n              \x3c!--Take user to create Group form--\x3e\n                <a [routerLink]="[\'create\']" routerLinkActive="router-link-active"  class="btn btn-md btn-fill btn-warning">\n                  <span class="glyphicon glyphicon-plus-sign">Create New Group!</span>\n                </a>\n            </ng-template>\n        </div>\n      </div>\n      <div class = col-md-8>\n        <div class="list-group">\n          <ng-template [ngIf]="groups.length > 0">\n            \x3c!--Link to that group detail page--\x3e\n            <a *ngFor="let group of groups" class="list-group-item">\n              <h3 (click) = "loadTheGroup(group.id)"class="title list-group-item-heading">{{group.name}}</h3>\n              <div class="list-group-item-text container-fluid">\n                <h5>Description:</h5>\n                {{group.description}}\n              </div>\n              <br>\n              <div class="row">\n                <div class="col-md-4">\n                  Total Members : <span class="badge">{{group.members.length}}</span>                  \n                </div>\n                <div class="col-md-4">\n                  Total Posts : <span class=\'badge\'>Group posts count need to be put</span>                  \n                </div>\n              </div>\n            </a>\n          </ng-template>      \n        </div>\n    </div>\n  </div>\n</div>'},PyNt:function(e,t){e.exports=".success{\r\n    color:green;\r\n    background-color:lightgreen;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9ncm91cHMvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0NBQy9CIiwiZmlsZSI6InNyYy9ncm91cHMvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VjY2Vzc3tcclxuICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZWVuO1xyXG59Il19 */"},TB64:function(e,t){e.exports="\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"},Vd8Z:function(e,t){e.exports='<div class="post-page">\n  <div class="container">\n    <div class="row">\n      <div class="col-md-8">\n        <h4 *ngIf="type==\'create\'"> Create a new post</h4>\n        <h4 *ngIf="type==\'update\'"> Update post </h4>\n        <form [formGroup]=\'postForm\' (submit)="createPost(postForm)">\n          <label>Message</label>\n          <br>\n          <input type="text" formControlName="Message">\n          <br>\n          <label *ngIf="type==\'create\'"> Select the Group</label>\n          <select *ngIf="type==\'create\'" class="custom-select" formControlName="Group">\n            <option selected value="0">Choose Group</option>\n            <option *ngFor="let group of groupsList" value="{{group.id}}">{{group.name}}</option>\n          </select>\n          <br>\n          <input type="submit" value="Post" class="btn btn-primary btn-large">\n        </form>\n      </div>      \n    </div>\n    <div class="row" *ngIf="displaySuccessMessage">\n      <div class="col-md-8">\n        <h1>Success fully created</h1>\n      </div>\n    </div>\n  </div>\n</div>'},XYip:function(e,t){e.exports="<h1> Welcome to Star Social!</h1>\n"},an4n:function(e,t){e.exports="\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcG9zdC9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyJ9 */"},apE9:function(e,t){e.exports="\n<h1> Thanks for visiting, come back soon! </h1>\n"},crnd:function(e,t){function n(e){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="crnd"},e7ok:function(e,t){e.exports="\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvZ3JvdXBzL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"},"i+mD":function(e,t){e.exports='<div class="post=-page">\n  <div class="container">\n    <div class="row">\n      <div class="col-md-4">\n        <div class="card card-with-shaddow">\n          <div class="content">\n            <h5 class="title">Your Groups</h5>\n            <ul class="list-unstyled">\n              <li *ngFor="let group of usergroups" class=\'group li-with-bullet\'> \n                <a [routerLink]="[\'../\',\'group\',group.id,\'detail\']">{{ group.name }}</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class="card ard-with-shadow">\n          <div class="content">\n            <h5 class=\'title\'>All Groups</h5>\n            <ul class=\'list-unstyled\'>\n              <li *ngFor="let group of othergroups" class=\'group li-with-bullet\'>\n                <a [routerLink]="[\'../\',\'group\',group.id,\'detail\']">{{ group.name }}</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class="col-md-8">\n        <post-detail *ngFor="let post of posts" [post]="post"></post-detail>\n      </div>\n    </div>\n  </div>\n</div>\n\n\x3c!-- Add A model to display confirm delete --\x3e'},mBkj:function(e,t){e.exports="\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcG9zdC91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MifQ== */"},n7sk:function(e,t){e.exports="\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"},"nH/3":function(e,t){e.exports='\x3c!--The content below is only a placeholder and can be replaced.--\x3e\n<nav class=\'navbar navbar-expand-lg  navbar-light bg-light mynav\' role=\'navigation\' id=\'navbar\'>\n    <div class="container">\n        <a class="navbar-brand" [routerLink]="[\'/home\']"> Star  Social </a> \n        <ul class="nav navbar-nav navbar-right">\n            <ng-template [ngIf]="isAuthenticated">\n                <li class="nav-item"><a class="nav-link"[routerLink]="[\'post\']">Post</a></li>\n                <li class="nav-item"><a class="nav-link" [routerLink]="[\'group\']">Groups</a></li>\n                <li class="nav-item"><a class="nav-link" [routerLink]="[\'group\',\'create\']">Create Group</a></li>\n                <li class="nav-item"><a class="nav-link" (click)="logout()">Logout</a></li>\n            </ng-template>\n            <ng-template [ngIf]="!isAuthenticated">\n                <li class="nav-item"><a  class="nav-link" [routerLink]="[\'group\']">Groups</a></li>\n                <li class="nav-item"><a class="nav-link"[routerLink]="[\'login\',{\'type\':\'login\'}]">Log In</a></li>\n                <li class="nav-item"><a class="nav-link"[routerLink]="[\'login\',{\'type\':\'signup\'}]">Sign Up</a></li>\n            </ng-template>\n        </ul>\n    </div>\n</nav>\n<router-outlet></router-outlet>\n'},r5Ly:function(e,t){e.exports='<div class="post-page">\n  <div class="container">\n    <div class="row">\n      <div class="col-md-8">\n        <post-detail></post-detail>\n      </div>\n    </div>\n  </div>'},vd7c:function(e,t){e.exports="\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"},yAfO:function(e,t){e.exports='<div class="post media">\n          <h3>{{ post.message }}</h3>\n          <div class="media-body">            \n            <h5 class="media-heading">\n              <span class="username">\n                <a [routerLink]="[\'post\',post.userusername,\'userlist\']"><strong> {{ post.user.username }}</strong></a>\n              </span>\n              <time class="time">\n                {{ post.created_at }}\n              </time>\n            </h5>\n            <div class="media-footer">\n                <a *ngIf="isUserAuthenticated && post.user.email == loggedInUserEmail" (click)="deletePost(post.id)" class="btn btn-large btn-simple">\n                  <span class="text-danger icon-label">Delete</span>\n                </a>\n                <a *ngIf="isUserAuthenticated && post.user.email == loggedInUserEmail"  [routerLink]="[\'../\',\'post\',\'create\',{\'id\':post.id,\'groupId\':post.group.id,\'type\':\'update\'}]"  class="btn btn-large btn-simple">\n                  <span class="text-warning icon-label">Update</span>\n                </a>\n            </div>\n          </div>\n</div>\n    '},zRbt:function(e,t){e.exports=".btn {\r\n    margin-top:15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3N0L2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9wb3N0L2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbn0iXX0= */"},zUnb:function(e,t,n){"use strict";n.r(t);var o=n("CcnG"),r=n("ToYH"),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){}return e.prototype.ngOnInit=function(){},e=i([Object(o.n)({selector:"app-post",template:n("r5Ly"),styles:[n("an4n")]}),s("design:paramtypes",[])],e)}(),c=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(){function e(){this.posts=[]}return e.prototype.ngOnInit=function(){},e=c([Object(o.n)({selector:"post-user-list",template:n("AOEa"),styles:[n("mBkj")]}),p("design:paramtypes",[])],e)}(),l=n("t/Na"),d=n("ZYCi"),f=n("K9Ia"),g=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(){function e(e,t){this.http=e,this.router=t,this.loggedinUserToken="",this.userName="",this.userId=0,this.isUserLoggedIn=new f.a,this.isUserLoggedIn.next(!1)}return e.prototype.getUserName=function(){return this.userName},e.prototype.getUserId=function(){return this.userId},e.prototype.Authorized=function(){return this.getLoggedInUserToken(),this.isUserLoggedIn.next(this.loggedinUserToken.length>0),this.loggedinUserToken.length>0},e.prototype.getLoggedInUserToken=function(){return this.loggedinUserToken=localStorage.getItem("userToken")?localStorage.getItem("userToken"):this.loggedinUserToken,this.userName=localStorage.getItem("username")?localStorage.getItem("username"):this.userName,this.userId=localStorage.getItem("userid")&&Number(localStorage.getItem("userid"))>0?Number(localStorage.getItem("userid")):this.userId,this.loggedinUserToken},e.prototype.setLoginTokenAndUsernameAndUserId=function(e,t,n){this.loggedinUserToken="Token "+t,localStorage.setItem("userToken",this.loggedinUserToken),this.userName=e,localStorage.setItem("username",e),this.userId=n,localStorage.setItem("userid",n.toString())},e.prototype.getCSRFToken=function(){return document.cookie.split(";").forEach(function(e){var t=e.split("=");if("csrftoken"==t[0].trim().toLowerCase())return t[1]}),""},e.prototype.login=function(e,t){var n=this,o=this.getCSRFToken();this.http.get("api/get-token?username="+e).subscribe(function(t){n.isUserLoggedIn.next(!0),n.setLoginTokenAndUsernameAndUserId(e,t.token,t.user_id),n.router.navigate(["home"])},function(r){n.http.post("api/login/",{email:e,password:t},{headers:{"X-CSRFToken":o}}).subscribe(function(t){n.isUserLoggedIn.next(!0),n.setLoginTokenAndUsernameAndUserId(e,t.token,t.user_id),n.router.navigate(["home"])},function(e){e.error.non_field_errors&&e.error.non_field_errors.length>0?alert(e.error.non_field_errors[0]):e.error.email&&e.error.email.length>0?alert(e.error.email[0]):e.error.password&&e.error.password.length>0&&alert(e.error.password[0])})})},e.prototype.logout=function(){var e=this;this.http.get("/api/user/logout/",{headers:{Authorization:this.loggedinUserToken}}).subscribe(function(){e.loggedinUserToken="",localStorage.removeItem("userToken"),e.isUserLoggedIn.next(!1),e.router.navigate(["logout"])})},e.prototype.register=function(e,t,n,o){var r=this,i=this.getCSRFToken();this.http.post("api/user/",{username:t,email:e,password:n,password2:o},{headers:{"X-CSRFToken":i}}).subscribe(function(){r.router.navigate(["login",{type:"login"}])},function(e){alert(e)})},e=g([Object(o.A)({providedIn:"root"}),h("design:paramtypes",[l.a,d.b])],e)}(),m=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(){function e(e,t){this.http=e,this.authentication=t,this.loggedinUserToken=""}return e.prototype.getGroups=function(){return this.http.get("api/group-list/")},e.prototype.getGroup=function(e){return this.http.get("api/group/"+e.toString()+"/",{headers:{Authorization:this.authentication.getLoggedInUserToken()}})},e.prototype.createGroup=function(e,t){return this.http.post("api/group/",{name:e,description:t},{headers:{Authorization:this.authentication.getLoggedInUserToken()}})},e.prototype.updateGroup=function(e,t,n){return void 0===t&&(t=""),void 0===n&&(n=""),this.http.put("api/group/"+e+"/",{name:t,description:n},{headers:{Authorization:this.authentication.getLoggedInUserToken()}})},e.prototype.leaveGroup=function(e){return this.http.delete("api/group/"+e.toString()+"/deletemember/1/",{headers:{Authorization:this.authentication.getLoggedInUserToken()}})},e.prototype.deleteGroup=function(e){return this.http.delete("api/group/"+e.toString()+"/",{headers:{Authorization:this.authentication.getLoggedInUserToken()}})},e.prototype.addMember=function(e){return this.http.post("api/add-member/",{group:e,user:this.authentication.getUserId()},{headers:{Authorization:this.authentication.getLoggedInUserToken()}})},e=m([Object(o.A)(),y("design:paramtypes",[l.a,b])],e)}(),I=n("67Y/"),j=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},w=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},R=function(){function e(e,t,n){this.http=e,this.authentication=t,this.groupDataService=n}return e.prototype.getPostList=function(){return this.http.get("api/post/",{headers:{Authorization:this.authentication.getLoggedInUserToken()}})},e.prototype.getGroups=function(){var e=this;return this.groupDataService.getGroups().pipe(Object(I.a)(function(t){var n=[];return t.forEach(function(t){var o=null;if(t.adminUser.email==e.authentication.getUserName())o=t.adminUser;else{var r=t.members.findIndex(function(t){return t.email==e.authentication.getUserName()});r>-1&&(o=t.members[r])}n.push({id:t.id,name:t.name,user:o})}),n}))},e.prototype.createPost=function(e,t){return this.http.post("api/post-create/",{group:e,message:t},{headers:{Authorization:this.authentication.getLoggedInUserToken()}})},e.prototype.updatePost=function(e,t,n){return this.http.put("api/post-update/"+n+"/",{group:e,message:t},{headers:{Authorization:this.authentication.getLoggedInUserToken()}})},e.prototype.deletePost=function(e){return this.http.delete("api/post-update/"+e+"/",{headers:{Authorization:this.authentication.getLoggedInUserToken()}})},e=j([Object(o.A)({providedIn:"root"}),w("design:paramtypes",[l.a,b,v])],e)}(),O=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},L=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},U=function(){function e(e){this.postDataService=e,this.usergroups=[],this.posts=[],this.othergroups=[],this.isUserAuthenticated=!0}return e.prototype.ngOnInit=function(){var e=this;this.postDataService.getPostList().subscribe(function(t){e.posts=t}),this.postDataService.getGroups().subscribe(function(t){t.forEach(function(t){null!=t.user?e.usergroups.push(t):e.othergroups.push(t)})})},e=O([Object(o.n)({selector:"post-list",template:n("i+mD"),styles:[n("KnAe")]}),L("design:paramtypes",[R])],e)}(),G=n("gIcY"),k=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},z=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(){function e(e,t,n){var o=this;this.postDataService=e,this.route=t,this.router=n,this.groupsList=[],this.postId=0,this.displaySuccessMessage=!1,this.route.params.subscribe(function(e){o.selectedGroupId=e.groupId,e.type&&(o.type=e.type),e.id&&(o.postId=e.id)})}return e.prototype.ngOnInit=function(){var e=this;this.postDataService.getGroups().subscribe(function(t){t.forEach(function(t){null!=t.user&&e.groupsList.push(t)})}),this.postForm=new G.b({Message:new G.a,Group:new G.a}),this.postForm.get("Group").setValue(this.selectedGroupId?this.selectedGroupId:0)},e.prototype.displayError=function(e){e.error.group?alert(e.error.group):e.error.message?alert(e.error.message):alert(e.error)},e.prototype.displaySuccess=function(){var e=this;this.displaySuccessMessage=!0,setTimeout(function(){e.displaySuccessMessage=!1,e.router.navigate(["post"])},5e3)},e.prototype.createPost=function(e){var t=this;"update"==this.type?this.updatePost(e):this.postDataService.createPost(e.value.Group,e.value.Message).subscribe(function(){t.displaySuccess()},function(e){t.displayError(e)})},e.prototype.updatePost=function(e){var t=this;this.postDataService.updatePost(this.selectedGroupId,e.value.Message,this.postId).subscribe(function(){t.displaySuccess()},function(e){t.displayError(e)})},e=k([Object(o.n)({selector:"post-form",template:n("Vd8Z"),styles:[n("zRbt")]}),z("design:paramtypes",[R,d.a,d.b])],e)}(),C=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},X=[{path:"post",component:U},{path:"post/:id/detail",component:a},{path:"post/:name/userlist",component:u},{path:"post/create",component:x},{path:"post/:id/update",component:x}],J=function(){function e(){}return e=C([Object(o.I)({imports:[d.c.forChild(X)],exports:[d.c]})],e)}(),S=n("Ip0R"),N=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},Z=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},A=function(){function e(e,t,n){var o=this;this.postService=e,this.authentication=t,this.router=n,this.isUserAuthenticated=!1,this.loggedInUserEmail="",this.isUserAuthenticated=this.authentication.Authorized(),this.loggedInUserEmail=this.authentication.getUserName(),this.authentication.isUserLoggedIn.subscribe(function(e){o.isUserAuthenticated=e,console.log(o.isUserAuthenticated)})}return e.prototype.ngOnInit=function(){},e.prototype.deletePost=function(e){this.postService.deletePost(e).subscribe(function(){window.location.reload()},function(e){alert(e.error)})},N([Object(o.D)(),Z("design:type",Object)],e.prototype,"post",void 0),e=N([Object(o.n)({selector:"post-detail",template:n("yAfO"),styles:[n("KIWm")]}),Z("design:paramtypes",[R,b,d.b])],e)}(),P=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},Y=function(){function e(){}return e=P([Object(o.I)({declarations:[A,U,x,u,a],imports:[S.b,G.c,J],exports:[U]})],e)}(),V=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},W=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},M=function(){function e(e){this.authService=e}return e.prototype.canActivate=function(e,t){return this.authService.Authorized()},e=V([Object(o.A)({providedIn:"root"}),W("design:paramtypes",[b])],e)}(),F=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},B=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},Q=function(){function e(e,t,n){var o=this;this.groupService=e,this.route=t,this.router=n,this.displaySuccessMessage=!1,this.route.params.subscribe(function(e){o.type=e.type?e.type.toLowerCase():"create","update"==o.type&&(o.groupid=e.id)})}return e.prototype.ngOnInit=function(){this.createGroupForm=new G.b({name:new G.a,description:new G.a})},e.prototype.onCreate=function(e){var t=this;"create"==this.type?this.groupService.createGroup(e.value.name,e.value.description).subscribe(function(){t.displaySuccessMessage=!0,setTimeout(function(){t.displaySuccessMessage=!1,t.router.navigate(["group"])},5e3)},function(e){alert(e.error)}):"update"==this.type&&this.groupService.updateGroup(this.groupid,e.value.name,e.value.description).subscribe(function(){t.displaySuccessMessage=!0,setTimeout(function(){t.displaySuccessMessage=!1,t.router.navigate(["group"])},5e3)},function(e){e.error.name?alert(e.error.name[0]):e.error.description?alert(e.error.description[0]):alert("some error has come check with admin")})},e=F([Object(o.n)({selector:"group-form",template:n("Cz5e"),styles:[n("PyNt")]}),B("design:paramtypes",[v,d.a,d.b])],e)}(),T=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},D=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},E=function(){function e(e,t,n,o){var r=this;this.service=e,this.groupService=t,this.route=n,this.router=o,this.userInCurrentGroup=!1,this.posts=[],this.route.params.subscribe(function(e){r.groupService.getGroup(e.id).subscribe(function(e){r.group=e,r.loggedInUserName=r.service.getUserName(),r.userInCurrentGroup=r.group.members.findIndex(function(e){return e.email==r.loggedInUserName})>-1})})}return e.prototype.isLoggedInUserAdmin=function(){return!(!this.group||!this.group.adminUser)&&this.group.adminUser.email==this.loggedInUserName},e.prototype.ngOnInit=function(){},e.prototype.isUserAuthenticated=function(){return this.service.Authorized()},e.prototype.leaveGroup=function(e,t){t.preventDefault(),this.groupService.leaveGroup(e).subscribe(function(e){window.location.reload()},function(e){alert(e.error)})},e.prototype.joinGroup=function(e){this.groupService.addMember(e).subscribe(function(e){window.location.reload()},function(e){console.log(e)})},e.prototype.deleteGroup=function(e){var t=this;confirm("are you sure want to delete")&&this.groupService.deleteGroup(e).subscribe(function(){t.router.navigate(["../../../","group"])},function(e){alert(e.error)})},e=T([Object(o.n)({selector:"group-detail",template:n("GoAk"),styles:[n("e7ok")]}),D("design:paramtypes",[b,v,d.a,d.b])],e)}(),H=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},K=function(){function e(e,t,n){var o=this;this.groupService=e,this.service=t,this.router=n,this.userIsAuthenticated=!1,this.groups=[],this.username="",this.userIsAuthenticated=this.service.Authorized(),this.userIsAuthenticated&&(this.username=this.service.getUserName()),this.groupService.getGroups().subscribe(function(e){o.groups=e})}return e.prototype.ngOnInit=function(){},e.prototype.loadTheGroup=function(e){this.router.navigate(["group",e,"detail"])},e=H([Object(o.n)({selector:"group-list",template:n("P7jh"),styles:[n("8LqL")]}),_("design:paramtypes",[v,b,d.b])],e)}(),q=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},$=[{path:"group",component:K},{path:"group/:id/detail",component:E,canActivate:[M]},{path:"group/:type",component:Q,canActivate:[M]}],ee=function(){function e(){}return e=q([Object(o.I)({imports:[d.c.forChild($)],exports:[d.c]})],e)}(),te=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},ne=function(){function e(){}return e=te([Object(o.I)({declarations:[E,Q,K],imports:[S.b,G.c,ee,Y,l.b],providers:[v]})],e)}(),oe=n("ZYjt"),re=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},ie=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},se=function(){function e(e,t){var n=this;this.service=e,this.route=t,this.registerView=!1,this.route.params.subscribe(function(e){"signup"==e.type?n.registerView=!0:n.registerView=!1})}return e.prototype.ngOnInit=function(){this.registerForm=new G.b({username:new G.a,email:new G.a,password:new G.a,password1:new G.a}),this.loginForm=new G.b({username:new G.a,password:new G.a})},e.prototype.onRegister=function(e){this.service.register(e.value.email,e.value.username,e.value.password,e.value.password1)},e.prototype.onLogin=function(e){this.service.login(e.value.username,e.value.password)},e=re([Object(o.n)({selector:"app-login",template:n("0KVQ"),styles:[n("n7sk")]}),ie("design:paramtypes",[b,d.a])],e)}(),ae=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},ce=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},pe=function(){function e(){}return e.prototype.ngOnInit=function(){},e=ae([Object(o.n)({selector:"app-homepage",template:n("XYip"),styles:[n("TB64")]}),ce("design:paramtypes",[])],e)}(),ue=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},le=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},de=function(){function e(e){this.service=e}return e.prototype.ngOnInit=function(){},e=ue([Object(o.n)({selector:"app-logout",template:n("apE9"),styles:[n("vd7c")]}),le("design:paramtypes",[b])],e)}(),fe=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},ge=[{path:"home",component:pe},{path:"logout",component:de},{path:"login",component:se},{path:"*",redirectTo:"['/login',{'type':'login'}]",pathMatch:"full"}],he=function(){function e(){}return e=fe([Object(o.I)({imports:[d.c.forRoot(ge,{useHash:!0})],exports:[d.c]})],e)}(),be=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},me=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},ye=function(){function e(e){this.service=e,this.title="simplesocial",this.isAuthenticated=!1,this.isAuthenticated=e.Authorized()}return e.prototype.ngOnInit=function(){var e=this;this.service.isUserLoggedIn.subscribe(function(t){e.isAuthenticated=t})},e.prototype.logout=function(){this.service.logout()},e=be([Object(o.n)({selector:"app-root",template:n("nH/3"),styles:[n("A3xY")]}),me("design:paramtypes",[b])],e)}(),ve=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},Ie=function(){function e(){}return e=ve([Object(o.I)({declarations:[ye,pe,se,de],imports:[oe.a,he,G.c,ne,Y],providers:[],bootstrap:[ye]})],e)}();Object(r.a)().bootstrapModule(Ie).catch(function(e){return console.error(e)})}},[[0,0,4]]]);
//# sourceMappingURL=main.js.map