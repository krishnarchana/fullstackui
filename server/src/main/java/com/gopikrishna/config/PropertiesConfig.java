/**
 * Application properties manager
 * 
 */
package com.gopikrishna.config;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.apache.log4j.Logger;

import com.gopikrishna.db.DBConnection;

/**
 * Loads the properties from properties file
 * 
 * This is a singleton class
 * 
 * @author gopikrishna
 *
 */
public class PropertiesConfig {

	static final Logger logger = Logger.getLogger(DBConnection.class);
	private static PropertiesConfig singleton = new PropertiesConfig();

	String db_url;
	String db_user;
	String db_passwd;

	// java properties
	Properties prop = new Properties();

	private PropertiesConfig() {
		init();
	}

	/**
	 * return instance
	 * @return
	 */
	public static PropertiesConfig getInstance() {
		return singleton;
	}

	void init() {
		logger.info("Initiazling Properties");

		InputStream input = null;

		try {
			input = getClass().getClassLoader().getResourceAsStream("config.properties");

			// load a properties file
			prop.load(input);

		} catch (IOException ex) {
			logger.error("Failed to initialize : " + ex.getMessage());
		} finally {
			if (input != null) {
				try {
					input.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}

//	public void test() {
//		// Store info
//		db_url = prop.getProperty("database.url");
//		db_user = prop.getProperty("database.user");
//		db_passwd = prop.getProperty("database.passwd");
//		System.out.println("DB url : " + db_url);
//	}

	/**
	 * Get property value for property name
	 * 
	 * @param propertyName
	 * @return
	 */
	public String getProperty(String propertyName) {
		if (logger.isDebugEnabled()) {
			logger.debug("Get property : "+ propertyName);
		}
		
		return prop.getProperty(propertyName);
	}

}
