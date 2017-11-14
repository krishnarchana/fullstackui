package com.gopikrishna.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.apache.log4j.Logger;

import com.gopikrishna.config.PropertiesConfig;

/**
 * 
 * @author gopikrishna
 *
 */
public class DbConnection {

	static final Logger logger = Logger.getLogger(DbConnection.class);
	private PropertiesConfig properties = PropertiesConfig.getInstance();
	private static DbConnection singleton = new DbConnection();

	String db_url; // complete jdbc db url
	String db_user; // db username
	String db_passwd; // db password

	// is database successfully setup
	boolean db_init = false;
	
	// Database connection object (reusable)
	private Connection connection = null;

	private DbConnection() {
		// Example "jdbc:mysql://localhost:3306/test";
		db_url = properties.getProperty("database.url");
		db_user = properties.getProperty("database.user");
		db_passwd = properties.getProperty("database.passwd");

		initDatabase();
	}

	private void initDatabase() {
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			connection = DriverManager.getConnection(db_url, db_user, db_passwd);
			
			logger.info("DATABASE : Connection Successful.");
			
			db_init = true; // set flag
		} catch (SQLException e) {
			logger.error("Failed to initialize db : " + e.getMessage());
		} catch (Exception ex) {
			logger.error("Error : " + ex.getMessage());
		}
	}

	/**
	 * Return instance
	 * 
	 * @return
	 */
	public static DbConnection getInstance() {
		return singleton;
	}

	/**
	 * Get DB connection object
	 * 
	 * @return
	 * @throws Exception
	 */
	public Connection getConnection() throws Exception {
		if (db_init) {
			return connection;
		}
		
		return null;
	}
}
