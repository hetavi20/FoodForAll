from re import U
from django.contrib import admin



from .models import cookedmeald, feedback, myUser,donation,userdetail,cart,cartItem,fooddata,foodpack,packCart,gallarypics


# # register model
admin.site.register(myUser)
admin.site.register(donation)
admin.site.register(userdetail)
admin.site.register(cart)
admin.site.register(cartItem)
admin.site.register(fooddata)
admin.site.register(foodpack)
admin.site.register(packCart)
admin.site.register(feedback)
admin.site.register(gallarypics)
admin.site.register(cookedmeald)
