package org.policymanager.app;

import java.io.Serializable;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

import org.apache.log4j.Logger;
import org.policymanager.config.PropertiesConfig;
import org.policymanager.db.DbConnection;

/**
 * Application startup control
 * 
 * @author gopikrishna
 */
public class AppControl extends HttpServlet implements Serializable {

	private static final long serialVersionUID = 1L;

	static final Logger logger = Logger.getLogger(AppControl.class);

	public void init() throws ServletException {
		logger.info(">>> RESTServer Application Startup.");

		loadProperties();

		init_database();
	}

	private void loadProperties() {
		// Just load the properties
		PropertiesConfig properties = PropertiesConfig.getInstance();
	}

	private void init_database() {
		DbConnection dbConnect = DbConnection.getInstance();

		try {
			if (dbConnect.getConnection() != null) {
				logger.info("Database connection tested.");
			}
		} catch (Exception e) {
			logger.error("Error in DB test :" + e.getMessage());
		}

	}
}
