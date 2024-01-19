Feature: Verify India Produce Display

Scenario: Verify Portal Display for India Produce
    Given I open the Portal
    When I check the navigation for India Produce
    Then the navigation items should be underlined in red color
    And the underlined navigation items need verification

    And I locate the header for India Produce
    Then the header should be present
    And the header needs verification

    And I check between the India Produce header and the navigation
    Then a breadcrumb (historic) should be displayed
    And the breadcrumb needs verification

    And Check Search here button

    And Look for the total number of India Produce provided
    Then Total number of India Produce should be present
    And Total number of India Produce needs verification