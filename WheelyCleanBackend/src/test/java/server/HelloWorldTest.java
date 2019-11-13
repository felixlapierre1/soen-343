package server;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 * Test class for HelloWorld
 * @author Felix
 */
public class HelloWorldTest {
    
    public HelloWorldTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

    /**
     * Test of GetMessage method, of class HelloWorld.
     */
    @Test
    public void testGetMessage() {
        System.out.println("GetMessage");
        String expResult = "Hello, world!";
        String result = HelloWorld.GetMessage();
        assertEquals(expResult, result);
    }
    
}
