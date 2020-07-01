package generation.smartGiving;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class SmartGivingApplication {

	public static void main(String[] args) {
		SpringApplication.run(SmartGivingApplication.class, args);
	}

}
