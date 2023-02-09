<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com with your real receiving email address
  $receiving_email_address = 'contact@example.com';

  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  //图片上传
  $allowedExts = array("gif", "jpeg", "jpg", "png");
  $temp = explode(".", $contact["file"]["name"]);
  echo $contact["file"]["size"];
  $extension = end($temp);     // 获取文件后缀名
  if ((($contact["file"]["type"] == "image/gif")
  || ($contact["file"]["type"] == "image/jpeg")
  || ($contact["file"]["type"] == "image/jpg")
  || ($contact["file"]["type"] == "image/pjpeg")
  || ($contact["file"]["type"] == "image/x-png")
  || ($contact["file"]["type"] == "image/png"))
  && ($contact["file"]["size"] < 204800)   // 小于 200 kb
  && in_array($extension, $allowedExts))
  {
      if ($contact["file"]["error"] > 0)
      {
          echo "错误：: " . $contact["file"]["error"] . "<br>";
      }
      else
      {
          echo "上传文件名: " . $contact["file"]["name"] . "<br>";
          echo "文件类型: " . $contact["file"]["type"] . "<br>";
          echo "文件大小: " . ($contact["file"]["size"] / 1024) . " kB<br>";
          echo "文件临时存储的位置: " . $contact["file"]["tmp_name"] . "<br>";
          
          // 判断当前目录下的 upload 目录是否存在该文件
          // 如果没有 upload 目录，你需要创建它，upload 目录权限为 777
          if (file_exists("upload/" . $contact["file"]["name"]))
          {
              echo $contact["file"]["name"] . " 文件已经存在。 ";
          }
          else
          {
              // 如果 upload 目录不存在该文件则将文件上传到 upload 目录下
              move_uploaded_file($contact["file"]["tmp_name"], "upload/" . $contact["file"]["name"]);
              echo "文件存储在: " . "upload/" . $contact["file"]["name"];
          }
      }
  }
  else
  {
      echo "非法的文件格式";
  }


  $contact = new PHP_Email_Form;
  $contact->ajax = true;
  
  $contact->to = $receiving_email_address;
  $contact->from_name = $_POST['name'];
  $contact->from_email = $_POST['email'];
  $contact->subject = $_POST['subject'];

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
  /*
  $contact->smtp = array(
    'host' => 'example.com',
    'username' => 'example',
    'password' => 'pass',
    'port' => '587'
  );
  */

  $contact->add_message( $_POST['name'], 'From');
  $contact->add_message( $_POST['email'], 'Email');
  $contact->add_message( $_POST['message'], 'Message', 10);

  echo $contact->send();
?>
