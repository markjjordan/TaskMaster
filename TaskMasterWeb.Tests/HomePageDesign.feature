Feature: HomePageDesign
    When I go to the home page
    I want to see a masthead saying "Task Master" with a blue background color
    So that I know I'm in the right place

@mytag
Scenario: Home Page masthead
    Given I am on the TaskMaster site
    When I go to the home page
    Then the page header text should be "Task Master"
