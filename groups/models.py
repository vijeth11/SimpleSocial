from django.db import models
from django.template.base import kwarg_re
from django.utils.text import slugify

# Create your models here.
import misaka 
from django.contrib.auth import get_user_model

User = get_user_model()
from django import template
register = template.Library()


class Group(models.Model):
    name = models.CharField(max_length = 255,unique=True)
    slug = models.SlugField(allow_unicode=True,unique=True)
    description = models.TextField(blank=True,default='')
    description_html = models.TextField(editable=False,default='',blank=True)
    adminUser = models.ForeignKey(User, related_name='admin_user_group', on_delete = models.CASCADE)
    members = models.ManyToManyField(User,through='GroupMember', blank=True)

    def __str__(self):
        return self.name

    def save(self,*args,**kwargs):
        self.slug = slugify(self.name)
        self.description_html = misaka.html(self.description)
        super().save(*args,**kwargs)

    def get_result(self):
        return self.slug

    class Meta:
        ordering = ['name']

class GroupMember(models.Model):
    group = models.ForeignKey(Group, related_name='memberships', on_delete = models.CASCADE)
    user = models.ForeignKey(User, related_name='user_groups', on_delete = models.CASCADE)

    def __str__(self):
        return self.user.username

    class Meta:
        unique_together = ('group','user')