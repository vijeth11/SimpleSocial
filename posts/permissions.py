from rest_framework import permissions

class BlockUnauthorizedUpdateOfPost(permissions.BasePermission):
    """
    Global permission check for blocked IPs.
    """

    def has_object_permission(self, request, view, obj):
        if  request.method in permissions.SAFE_METHODS:
            return True
        else:
            return request.user == obj.user
                