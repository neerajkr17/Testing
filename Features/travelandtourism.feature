Feature: Verify Travel & Tourism Display

Scenario: Verify Portal Display for Travel & Tourism
    Given I open the portal
    When I check the navigation for Travel & Tourism
    Then the navigation items should be underlined in red color tt
    And the underlined navigation items need verification tt

    And I locate the header for Travel & Tourism
    Then the header should be present tt
    And the header needs verification tt

    And I check between the Travel & Tourism header and the navigation
    Then a breadcrumb (historic) should be displayed tt
    And the breadcrumb needs verification tt


    And Look for the total number of tourist places provided
    Then the total number of tourist places should be present
    And the total number of tourist places needs verification