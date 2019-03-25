Feature: Sending email from contact page

  As a user
  I am not able to send email without a message

  Scenario Outline: User fill all required data without message
    Given User navigate to home page
    When User click on contact button from top menu
    When User fill required information in the form: "<First Name>", "<Last Name>", "<Company>", "<Email>"
    When User fill not required information in the form "<Phone>"
    When User click on submit button
    Then Message is not sent, above the form is displayed error
    Then Message is not sent, below the message field is displayed error

    Examples:
      | First Name | Last Name | Company | Email              | Phone        |
      | Jan        | Kowalski  | Firma   | jan.kowalski@wp.pl | +48668945236 |