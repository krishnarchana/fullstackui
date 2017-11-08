/**
 * Application Startup
 */
package com.gopikrishna.app;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

import org.apache.log4j.Logger;

import com.gopikrishna.config.PropertiesConfig;
import com.gopikrishna.db.DBConnection;

/**
 * Application startup control
 * 
 * @author venkat
 */
public class AppControl extends HttpServlet {
	
	static final Logger logger = Logger.getLogger(AppControl.class);

	public void init() throws ServletException {
		logger.info(">>> RESTServer Application Startup.");
		
		loadProperties();
		
		init_database();
	}

	private void loadProperties() {
		PropertiesConfig properties = PropertiesConfig.getInstance();
	}

	private void init_database() {
		DBConnection dbConnect =  DBConnection.getInstance();

		try {
			if (dbConnect.getConnection() != null) {
				logger.info("Database connection tested.");
			}
		} catch (Exception e) {
			logger.error("Error in DB test :" + e.getMessage());
		}

	}
}
