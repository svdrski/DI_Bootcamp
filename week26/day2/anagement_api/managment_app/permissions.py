from rest_framework import permissions
class IsDepartmentAdmin(permissions.BasePermission):
    def has_object_permission(self, req, view, obj):
        return obj.administrator == req.user