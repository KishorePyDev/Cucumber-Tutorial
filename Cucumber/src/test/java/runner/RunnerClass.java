package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "feature/searchGoogle.feature",glue = "stepDefinitions",format="html:test-output"
		
		)
public class RunnerClass {

}
