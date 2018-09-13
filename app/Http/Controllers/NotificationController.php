<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Comment;
use App\Post;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

use Twilio\Rest\Client;
use Twilio\Jwt\ClientToken;
use DB;
use Carbon;
class NotificationController extends Controller
{
    //
	public function sendmail(Request $request, $id){

		//build the message based of the request
		$post=Post::findOrfail($id);
		$title="Reponse a votre requete:  {$id}";
		$input = $request->all();

		//$mail_to=$post->ns_address_email;
		//$typenotif= $post->typenotification ;
		$name = $post->nom;
		$email = "koffieli@gmail.com";
		//$from-> $post->user->name;
		$content = $request->mailbody;


		try{
			Mail::send('admin.posts.sendmail', ['name' => $name, 'email' => $email, 'title' => $title, 'content' => $content], function ($message) use ($post, $title) {
				$message->from('koffielie@h-aigis.com', 'Nsia Service Qualite');
				$message->to($post->ns_address_email, $post->ns_nom_prenom)->subject("Reponse a votre requete ".$post->id);
			});

			//save to the database 
			self::savenotification($post->id,$post->typenotification->name,$post->ns_nom_prenom,$post->ns_address_email,$content);
			return redirect()->back()->with('status', 'Votre message a ete envoye avec success');
		}
		catch (Exception $e)
		{
			return redirect()->back()->with('fail', "Error: " . $e->getMessage());
		}	
	}

	//send sms from here
	public function sendsms(Request $request,$id){

       // $accountSid = getenv('TWILIO_ACCOUNT_SID');
       // $authToken = getenv('TWILIO_AUTH_TOKEN');
       // $twilioNumber = getenv('TWILIO_NUMBER');
        //
		$post=Post::findOrfail($id);
		$sms = "Resultat de votre reclamation {$post->id}:  ". $request->body;
		$accountSid = config('app.twilio')['TWILIO_ACCOUNT_SID'];
		$authToken  = config('app.twilio')['TWILIO_AUTH_TOKEN'];
		$twilio_number  = config('app.twilio')['TWILIO_NUMBER'];
		$client = new Client($accountSid, $authToken);

		//prepare to save the notification 
		//return $post->ns_nom_prenom;
		try
		{
            // Use the client to do fun stuff like send text messages!
			$client->messages->create(
            // the number you'd like to send the message to
				$post->ns_phone,
				array(
                 // A Twilio phone number you purchased at twilio.com/console
					'from' => $twilio_number,
                 // the body of the text message you'd like to send
					'body' => $sms
				)
			);
			self::savenotification($post->id,$post->typenotification->name,$post->ns_nom_prenom,$post->ns_phone,$content);

			return redirect('Back')->with('status', 'Message Envoye avec success!');
		}
		catch (Exception $e)
		{
			return redirect()->back()->with('fail', "Error: " . $e->getMessage());

		}
	}

	//save the notification emails and sms into the database to keep track of the communications 
	private function savenotification($postid,$notificationtype,$clientname,$notificationto,$body)
	{


		DB::table('notifications')->insert(
			['post_id' => $postid,
			'notification_type' =>$notificationtype,
			'notification_nom_prenom'=>$clientname,
			'notification_to'=>$notificationto,
			'body' => $body,
			'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
			'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
		]);


	}
}
