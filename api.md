Here we will express all the methods and actions we will use
 - POST

 - GET

 - PUT

 - DELETE

Here we will write all the possible response codes in our API.

Successful responses
--------------------------------------------------------------------------
| 200 | Success - (Connecting to DB/Resource)
| 201 | Data Insertion Successful - (On POST)
| 202 | Data Obtained successfully - (On GET)
| 203 | Data Updated successfully - (On PUT)
| 204 | Data Removed successfully - (On DELETE)
| 205 | Data recovered successfully - (On callback action after insertion)
--------------------------------------------------------------------------

Error responses
--------------------------------------------------------------------------
| 404 | Content not found - (Resource is offline)
| 405 | Data Insertion Failed* - (On POST)
| 405 | Failed obtaining data* - (On POST)
| 405 | Failed updating data* - (On POST)
| 405 | Failed removing data* - (On POST)
--------------------------------------------------------------------------

Unknown responses
--------------------------------------------------------------------------
| 500 | Internal server error.
--------------------------------------------------------------------------
