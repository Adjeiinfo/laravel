<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Twilio\Rest\Client;
use Twilio\Jwt\ClientToken;

class SmsController extends Controller
{
    public function sendSms()
    {
        $accountSid = config('app.twilio')['TWILIO_ACCOUNT_SID'];
        $authToken  = config('app.twilio')['TWILIO_AUTH_TOKEN'];
        $appSid     = config('app.twilio')['TWILIO_NUMBER'];
        
        $client = new Client($accountSid, $authToken);
        try
        {
            // Use the client to do fun stuff like send text messages!
            $client->messages->create(
            // the number you'd like to send the message to
                +919033999999,
                array(
                 // A Twilio phone number you purchased at twilio.com/console
                   'from' => '+17204393482',
                 // the body of the text message you'd like to send
                   'body' => 'Hey Ketav! It’s good to see you after long time!'
               )
            );
        }
        catch (Exception $e)
        {
            echo "Error: " . $e->getMessage();
        }
    }
}