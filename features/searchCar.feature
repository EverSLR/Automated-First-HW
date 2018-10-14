@searchCar
Feature: Car Search

    As a client  I should be able to search a Car from requirements specified

    Scenario: A client must be able to Search a Car
        Given a client is on Home
        When select Cars I will be able to customize my search
        And i fill the requiered fields to search
        Then i will be redirected to Cars Page
        And Cars displayed must match with city selected
