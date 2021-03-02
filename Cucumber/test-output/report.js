$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/searchGoogle.feature");
formatter.feature({
  "line": 1,
  "name": "This is check google Search Engine",
  "description": "",
  "id": "this-is-check-google-search-engine",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Google Search scenario",
  "description": "",
  "id": "this-is-check-google-search-engine;google-search-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is entering the google.co.in",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user is trying to search for \"cognizant\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "enters the enter key",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user should see the search results",
  "keyword": "Then "
});
formatter.match({
  "location": "openGoogle.user_is_entering_the_google_co_in()"
});
formatter.result({
  "duration": 24992439000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cognizant",
      "offset": 30
    }
  ],
  "location": "openGoogle.user_is_trying_to_search_for(String)"
});
formatter.result({
  "duration": 3314000,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepDefinitions.openGoogle.user_is_trying_to_search_for(openGoogle.java:27)\r\n\tat ✽.When user is trying to search for \"cognizant\"(feature/searchGoogle.feature:4)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "openGoogle.enters_the_enter_key()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "openGoogle.the_user_should_see_the_search_results()"
});
formatter.result({
  "status": "skipped"
});
});