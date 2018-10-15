@filter
Feature: Car Filter

    As a client  I should be able to apply filters to Car page

    Scenario: A client must be able to filter Cars
        Given a client is on Cars
        When user modify filter fields
        Then cars appearing in the front must match filter fields
