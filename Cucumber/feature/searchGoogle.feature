Feature: This is check google Search Engine
Scenario: Google Search scenario
	Given user is entering the google.co.in
	When user is trying to search for "cognizant"
	And enters the enter key
	Then the user should see the search results
	
