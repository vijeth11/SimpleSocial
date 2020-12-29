from django.contrib import admin
from .models import AccountUser
from groups.models import Group
from posts.models import Post
# Register your models here.
admin.site.register(AccountUser)
admin.site.register(Group)
admin.site.register(Post)