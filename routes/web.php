<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\ActiveUsersController;
use App\Http\Controllers\DemoController;
use App\Http\Controllers\GuestController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//View Routes
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::middleware(['auth:sanctum', 'verified'])->get('/chat', function () {
    return Inertia::render('Chat/Room/ChatContainer');
})->name('chat');

Route::middleware(['auth:sanctum', 'verified'])->get('/chatrooms', function () {
    return Inertia::render('Chat/ChatRoomSelection/ChatRoomsContainer');
})->name('chatrooms');

Route::middleware('auth:sanctum')->get('/chatrooms/chatroom/{roomId}', [RoomController::class, 'chatroomView'])->name('joinRoom');

Route::middleware(['auth:sanctum', 'verified'])->get('/chatrooms/newRoom', function () {
    return Inertia::render('Chat/ChatRoomSelection/CreateNewContainer');
})->name('newRoom');


//guest routes
Route::get('/guest/{chatroom}', [GuestController::class, 'guestRegister']);

Route::get('/guest/settings', [GuestController::class, 'guestSettingsView']);

//post create new room
Route::middleware('auth:sanctum')->post('/guest/settings', [RoomController::class, 'newRoom']);


//Room
//Get Chat rooms
Route::middleware('auth:sanctum')->get('/allrooms', [RoomController::class, 'rooms']);

//Get Subbed Chat rooms
Route::middleware('auth:sanctum')->get('/subbedrooms', [RoomController::class, 'subbedRooms']);

//Get Subbed Chat rooms
Route::middleware('auth:sanctum')->get('/searchrooms/{keyword}', [RoomController::class, 'searchRooms']);

//Get current room
Route::middleware('auth:sanctum')->get('/chat/currentroom/{roomId}', [RoomController::class, 'currentRoom']);

//post create new room
Route::middleware('auth:sanctum')->post('/chat/newRoom/create', [RoomController::class, 'newRoom']);



//Messages
//Get messages in the room
Route::middleware('auth:sanctum')->get('/chat/room/{roomId}/messages', [MessageController::class, 'messages']);

//Get paginated messages in the room
Route::middleware('auth:sanctum')->get('/chat/room/{roomId}/paginated/{pagination}', [MessageController::class, 'getPaginatedMessages']);

//Get newest message in the room
Route::middleware('auth:sanctum')->get('/chat/room/{roomId}/newestmessage', [MessageController::class, 'getNewestMessage']);

//Post message to room
Route::middleware('auth:sanctum')->post('/chat/room/{roomId}/message', [MessageController::class, 'newMessage']);



//ActiveUsers
//Get Active users in the room
Route::middleware('auth:sanctum')->get('/chat/room/{roomId}/activeusers', [ActiveUsersController::class, 'activeUsers']);

//Post new active user
Route::middleware('auth:sanctum')->post('/chat/room/{roomId}/newactiveuser', [ActiveUsersController::class, 'newActiveUser']);

//Post deactivate user
Route::middleware('auth:sanctum')->post('/activate/{roomId}/{userId}', [ActiveUsersController::class, 'activateUser']);

//Post deactivate user
Route::middleware('auth:sanctum')->post('/deactivate/{roomId}/{userId}', [ActiveUsersController::class, 'deactivateUser']);

//count active users
Route::middleware('auth:sanctum')->get('/countactive/{roomId}', [ActiveUsersController::class, 'countActiveUsers']);

//post new subscriber to pivot table
Route::middleware('auth:sanctum')->post('/subscribeuser/{roomId}/{userId}', [ActiveUsersController::class, 'subscribeUser']);

//News
//Get news on the topic of the room
Route::middleware('auth:sanctum')->get('/chat/room/news/{topic}', [NewsController::class, 'news']);

//Get news on the topic of choice
Route::middleware('auth:sanctum')->get('/chat/room/news/search/{topic}', [NewsController::class, 'searchNews']);



//Demo
//Post new active user
Route::middleware('auth:sanctum')->post('/chat/room/{roomId}/newdemoactiveuser', [DemoController::class, 'newDemoActiveUser']);

//Post deactivate user
Route::middleware('auth:sanctum')->post('/chat/room/deactivatedemo/{roomId}', [DemoController::class, 'deactivateDemoUser']);

//Post message to room
Route::middleware('auth:sanctum')->post('/chat/room/{roomId}/demomessage', [DemoController::class, 'newDemoMessage']);



//Subbed rooms testing routes
Route::middleware('auth:sanctum')->get('/allactiveusers/{roomId}', [ActiveUsersController::class, 'allActiveUsers']);

//Subbed rooms testing routes
Route::middleware('auth:sanctum')->get('/subbed', [RoomController::class, 'subbed']);
//Subbed users testing routes
Route::middleware('auth:sanctum')->get('/subbedusers', [RoomController::class, 'subbedusers']);