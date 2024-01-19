Feature: Verify Accommodation Display

Scenario: Verify Portal Display for Accommodation
    Given I open the Portal
    When I check the navigation for Accommodation
    Then the navigation items should be underlined in red color
    And the underlined navigation items need verification

    And I locate the header for Accommodation
    Then the header should be present
    And the header needs verification

    And I check between the Accommodation header and the navigation
    Then a breadcrumb (historic) should be displayed
    And the breadcrumb needs verification

    And Check Search here button

    And Look for the total number of accommodation provided
    Then Total number of accommodation should be present
    And Total number of accommodation needs verification