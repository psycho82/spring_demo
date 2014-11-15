package com.itatservice.demo;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JsonController {
	private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/userDetails")
    public UserDetails getUserDetails() {
    	UserDetails u = new UserDetails(counter.incrementAndGet());
    	u.setUserName("rmaietta");
    	u.setEmailId("rmaietta@netgroup.it");
        return u;
    }
}
