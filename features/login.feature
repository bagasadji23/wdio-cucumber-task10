@Login
Feature: Login Test

  Background:
    Given user is on login page


  @positive
  Scenario Outline: Success Login
    And user input "<username>" as username
    And user input "<password>" as password
    When user click on login button
    Then user should be redirected to homepage

    Examples:
    | username      | password     |
    | standard_user | secret_sauce |
    | visual_user   | secret_sauceasd |

  @negative
  Scenario: Fail Login
    And user input "wew" as username
    And user input "wow" as password
    When user click on login button
    Then user should get error message "Epic sadface: Username and password do not match any user in this service"

