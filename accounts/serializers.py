from django.core.validators import validate_slug
from rest_framework import serializers
from django.contrib.auth import get_user_model,authenticate
from groups.models import Group, GroupMember
from posts.models import Post

class AccountUserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style ={'input_type':'password'},write_only=True)

    class Meta:
        model = get_user_model()
        fields = ['id','email','username','password','password2']
        extra_kwargs = {
            'password' : {'write_only':True}
        }

    def create(self, validated_data):
        password1 = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password1 != password2:
            raise serializers.ValidationError({'password':'Password Must match'})
        user = get_user_model().objects.create_user(email=validated_data['email'],username=validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()
        return user


class AccountUserAuthTokenSerializer(serializers.Serializer):

    email = serializers.EmailField(max_length=100)
    password = serializers.CharField(max_length=100, style={'input_type':'password'})

    def validate(self, validated_data):
        email = validated_data['email']
        password = validated_data['password']
        user = authenticate(request=self.context['request'],email=email,password=password)
        if not user:
                raise serializers.ValidationError('Email or password is not correct', code= 'authorization')
        validated_data['user'] = user
        return validated_data


"""class GroupCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['name','description']

    def create(self, validated_data):
        group = Group(
            name=validated_data['name'],
            description = validated_data['description']
        )
        group.save()
        return group"""


class GroupMemberSerializer(serializers.ModelSerializer):

    class Meta:
        model = GroupMember
        fields = '__all__'




class GroupSerializer(serializers.ModelSerializer):
    
    members = AccountUserSerializer(many = True, read_only =True)
    class Meta:
        model = Group
        fields = ['id','name','description','members','slug']
        read_only_fields = ['id','slug']
        

class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ['id','user','created_at','message','message_html','group']
        extra_kwargs = {'id':{'read_only':True}}