<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ChatController;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::middleware(['auth:sanctum', 'verified'])->get('/chat', function () {
    return Inertia::render('Chat/ChatContainer');
})->name('chat');

Route::middleware(['auth:sanctum', 'verified'])->get('/chatrooms', function () {
    return Inertia::render('Chat/ChatRoomsContainer');
})->name('chatrooms');

Route::middleware('auth:sanctum')->get('/chatrooms/chatroom/{roomId}', [ChatController::class, 'chatroom']);

Route::middleware(['auth:sanctum', 'verified'])->get('/chatrooms/newRoom', function () {
    return Inertia::render('Chat/CreateNewContainer');
})->name('newRoom');

//Get Chat rooms
Route::middleware('auth:sanctum')->get('/chat/rooms', [ChatController::class, 'rooms']);

//Get current room
Route::middleware('auth:sanctum')->get('/chat/room/{roomId}', [ChatController::class, 'currentRoom']);

//Get messages in the room
Route::middleware('auth:sanctum')->get('/chat/room/{roomId}/messages', [ChatController::class, 'messages']);

//Get Active users in the room
Route::middleware('auth:sanctum')->get('/chat/room/{roomId}/activeusers', [ChatController::class, 'activeUsers']);

//Get news on the topic of the room
Route::middleware('auth:sanctum')->get('/chat/room/news/{topic}', [ChatController::class, 'news']);

//Post message to room
Route::middleware('auth:sanctum')->post('/chat/room/{roomId}/message', [ChatController::class, 'newMessage']);

//Post new active user
Route::middleware('auth:sanctum')->post('/chat/room/{roomId}/newactiveuser', [ChatController::class, 'newActiveUser']);

//Post deactivate user
Route::middleware('auth:sanctum')->post('/chat/room/deactivate/{roomId}', [ChatController::class, 'deactivateUser']);

//post create new room
Route::middleware('auth:sanctum')->post('/chat/newRoom/create', [ChatController::class, 'newRoom']);