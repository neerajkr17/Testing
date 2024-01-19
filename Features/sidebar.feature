Feature: Verify Sidebar

Scenario: Verify Sidebar of Portal Accommodation
    Given I open the Portal for Sidebar
    When Check Sidebar

    Then Check Select State Dropdown
    And Check Accomodation Type Dropdown
