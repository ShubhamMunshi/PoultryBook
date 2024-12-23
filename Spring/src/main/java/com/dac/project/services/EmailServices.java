package com.dac.project.services;

import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.*;
//import javax.mail.MessagingException;
//import javax.mail.internet.MimeMessage;
import java.util.Random;

@Service
public class EmailServices {

	private String otp;

	public EmailServices() {
		super();
	}

	public String getOtp() {
		return otp;
	}

	public void setOtp(String otp) {
		this.otp = otp;
	}

	public void sendOtpEmail(String toEmail) {
		otp = generateOTP();
		String subject = "Your OTP Code";

//               emailBody = otp;

		sendEmail(toEmail, subject, otp);
	}

	private void sendEmail(String to, String subject, String body) {
		System.out.println("in services");

		String from = "poultrybookltd@gmail.com";
		String host = "smtp.gmail.com";

		Properties properties = System.getProperties();

		properties.put("mail.smtp.host", host);
		properties.put("mail.smtp.port", "465");
		properties.put("mail.smtp.ssl.enable", "true");
		properties.put("mail.smtp.auth", "true");

		Session sen = Session.getInstance(properties, new Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(from, "hljnugorkyzxaiob");
			}
		});

		sen.setDebug(true);

		MimeMessage m = new MimeMessage(sen);

		try {

			m.setFrom(from);
			m.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
			m.setSubject(subject);
			m.setText(body);

			Transport.send(m);
			System.out.println("send otp");

		} catch (Exception e) {
			System.out.println(e);

		}
	}

	private String generateOTP() {
		Random random = new Random();
		int otpValue = 100000 + random.nextInt(900000);
		return String.valueOf(otpValue);
	}


}