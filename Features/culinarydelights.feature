Feature: Verify Travel & Tourism Display

Scenario: Verify Portal Display for Travel & Tourism
    Given I open the Portal
    When I check the navigation for Travel & Tourism
    Then the navigation items should be underlined in red color
    And the underlined navigation items need verification

    And I locate the header for Travel & Tourism
    Then the header should be present
    And the header needs verification

    And I check between the Travel & Tourism header and the navigation
    Then a breadcrumb (historic) should be displayed
    And the breadcrumb needs verification

    And Check Search here button

    And Look for the total number of Travel & Tourism provided
    Then Total number of Travel & Tourism should be present
    And Total number of Travel & Tourism needs verification