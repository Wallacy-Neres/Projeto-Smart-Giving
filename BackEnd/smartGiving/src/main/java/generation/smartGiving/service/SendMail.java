package generation.smartGiving.service;

import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

@Service
public class SendMail {

	@Autowired
	private Environment enviromnent;
	
	public void send(String mailTo, String subject, String body)
	{
		Properties props = new Properties();

		props.put("mail.smtp.host", enviromnent.getProperty("mail.smtp.host"));
		props.put("mail.smtp.port",  enviromnent.getProperty("mail.smtp.port"));
		props.put("mail.smtp.starttls.enable",  enviromnent.getProperty("mail.smtp.starttls.enable"));
		props.put("mail.smtp.auth",  enviromnent.getProperty("mail.smtp.auth"));
		
		Session session = Session.getInstance(props, new javax.mail.Authenticator() 
		{
			protected PasswordAuthentication getPasswordAuthentication() 
			{
				String userName = enviromnent.getProperty("mail.smtp.username");
				String password = enviromnent.getProperty("mail.smtp.password");
				return new PasswordAuthentication(userName, password);
			}
				
		});
			
		try 
		{
			Message message = new MimeMessage(session);
			
			String mailFrom = enviromnent.getProperty("mail.smtp.from");
			message.setFrom(new InternetAddress(mailFrom));
			
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(mailTo));

			message.setSubject(subject);
			
			message.setText(body);

			Transport.send(message);

			System.out.println("Email enviado com sucesso!");

		} 
		catch (MessagingException e) 
		{
				throw new RuntimeException(e);
		}

	}
}