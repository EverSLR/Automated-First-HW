@login
Feature: Login

    As a client  I should be able to login using my credentials

    Scenario: A client must be able to Login
        Given a client is on the login
        When the right credentials are submitted
        Then the login attempt succeeded