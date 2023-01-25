---
description: Managing events with the Data Streamer, API, or Portal
---

# Working with events

There are three ways you can access and trigger available events:

- [Data Streamer](#data-streamer)
- [Event API](#event-api)
- [emnify Portal](#emnify-portal)

## Data Streamer

With the emnify Data Streamer, you can configure data streams to reflect events generated by the emnify system when your users perform billing-related updates, order SIMs, or perform other operations.

Using one of the many integrations provides you with complete network transparency to triage and resolve issues quickly and build your application or business logic based on the provided information.
These integrations also provide insights for IoT remote monitoring and anomaly detection or detailed information about service usage (i.e., data, SMS) and cost per device. 

:::tip
See the [Data Streamer documentation](../data-streamer/getting-started) to learn more about its benefits and how to get started.
:::

### Managing event data streams in the Portal

To manage your data streams, log in to your [emnify Portal](https://portal.emnify.com/) account. 
Then, navigate to the **Integrations** page by clicking the **Integrations** menu item in the sidebar.

If there are no data streams configured, the **Data Streams** panel displays all available connection types as tiles.

If you already have a data stream configured, the panel displays all existing streams, ordered by creation date (newest on the top). 
This list view can be used to gain an overview of the current states of different data streams. 

Data streams are marked as **Running** are properly operating.
Failed streams exhibit an **Error** status.
Paused streams are marked as **Paused**.

<img
  src={require('../assets/portal-integrations-data-streams-status.png').default}
  alt=""
/>

The **Details** button allows you to inspect the configuration of the specific stream.

:::info
You can distinguish event data streams by checking if the **Stream Type** on a specific data stream is set to **Stream events**. 
:::

The data streamer can apply filtering for event data streams based on event types. 
Under **Event Options**, you can choose to **Stream all events** or **Stream specific events only**. 
Selecting the latter will display a searchable dropdown listing all [event types](event-types) available as filters. 

<img
  src={require('../assets/portal-integrations-data-streams-details-events-filter.png').default}
  alt=""
/>

:::tip
You can also create, update, and delete data streams using the Portal.
Learn more in the [Data Streamer usage documentation](../data-streamer/usage#data-streamer-in-the-portal).
:::

## Event API

The [emnify REST API](/rest-api) provides a variety of HTTP requests to integrate several emnify services into your application, including triggering and monitoring events.

The [Event API](#retrieving-events-with-the-event-api) specifically allows searching for recent events and supports various types of result filtering.

:::caution
For events, the emnify REST API uses a [pull architecture](https://dev.to/anubhavitis/push-vs-pull-api-architecture-1djo), which means you're responsible for requesting updates and retrieving new events. 
If you prefer real-time updates, use the [emnify Data Streamer](#data-streamer).
:::

### Authentication

To use the emnify API, you need to authenticate with an authentication token.
We use JSON Web Tokens (JWTs) for our authentication tokens. 

:::tip
The [Getting Started guide in the *emnify REST API Documentation*](https://cdn.emnify.net/api/doc/getting-started.html) provides step-by-step instructions for retrieving your token.
:::

### Specification and documentation

The emnify API is based on the OpenAPI Specification 3.0 (OAS3). 
We also have [interactive API documentation](https://cdn.emnify.net/api/doc/swagger.html).  

:::note
Prior OpenAPI knowledge isn't necessary for working with the emnify API. 
Nevertheless, understanding [how an OpenAPI Specification is structured](https://oai.github.io/Documentation/specification.html) could help you navigate our documentation.
:::

The [Events Reference page](https://cdn.emnify.net/api/doc/event.html) in the *emnify REST API Documentation* provides details about the event structure and common elements you'll encounter while working with the Event API.

### Retrieving events with the Event API

The following entry points are available for retrieving a list of the events or event types available to your organization: 

| Method   | Entry point     | Description   |
| -------- | --------------- | ------------- |
| `GET`    | [/api/v1/event](https://cdn.emnify.net/api/doc/swagger.html#/Events/GetEvents)  | Returns the list of events, filtered, sorted, and paged according to query parameters. |
| `GET`    | [/api/v1/event/type](https://cdn.emnify.net/api/doc/swagger.html#/Events/EventTypeGet)  | Provides the list of event_types (lookup). |

Using the following entry points, you can also list events for specific endpoints, SIMs, or users. 
These event lists can be filtered, sorted, and paged according to query parameters.

| Method   | Entry point     | Description   |
| -------- | --------------- | ------------- |
| `GET`    | [/api/v1/endpoint/{endpoint_id}/event](https://cdn.emnify.net/api/doc/swagger.html#/Endpoint/EndpointEventsByID)  | Returns the list of endpoint events. |
| `GET`    | [/api/v1/sim/{sim_id}/event](https://cdn.emnify.net/api/doc/swagger.html#/SIM/SimEventPagePerPageSortBySimIdAndQGet)  | Returns the list of SIM events. |
| `GET`    | [/api/v1/user/{user_id}/event](https://cdn.emnify.net/api/doc/swagger.html#/User%20Management/UserEventPagePerPageSortByUserIdAndQGet)  | Returns the list of user events. |

## emnify Portal

There are several ways to view or trigger events within [the emnify Portal](https://portal.emnify.com/). 

### Events in the Portal

Here's where you can find event information in the Portal: 

- **Dashboard**: Overview of all event activity within your organization. 
<img
  src={require('./assets/portal-dashboard-events.png').default}
  alt=""
/>
- **Connected Devices** → **Details** → **Events**: List of triggered events for a particular device (also referred to as an "endpoint").
<img
  src={require('./assets/portal-connected-devices-details-events.png').default}
  alt=""
/>
- **SIM Inventory** → **Details** → **Events**: List of triggered events for a particular SIM card.
<img
  src={require('./assets/portal-sim-inventory-details-events.png').default}
  alt=""
/>

:::info
Any events triggered in the [Portal](https://portal.emnify.com/) will show **API** as the [event source](getting-started#event-source).
:::

### Available data for individual events

No matter where you view events in the Portal, you'll have access to the following information for each event:

- **Severity**: The [event severity](getting-started#event-severity).
- **Date**: When the event was triggered. By default, the Portal shows the relative date (e.g., "a day ago", "15 days ago," "a month ago"). Pressing the clock icon will show an absolute date value in the `MMMM dd, yyyy hh:mm a` format.
- **Event Source**: Which [system triggered the event](getting-started#event-source).
- **Event Type**: [Name of the triggered event](event-types) (the `description` value in the [Event Type Object](https://cdn.emnify.net/api/doc/event.html#event-type-object)). This field will also indicate the network generation (i.e., [4G](https://www.emnify.com/iot-glossary/4g), [5G](https://www.emnify.com/iot-glossary/5g), etc.) for specific events, like [PDP context lifecycles](event-types#data-connection-lifecycle).
- **Device**: Name of the device impacted by the event (the `name` value from the [Endpoint Object](https://cdn.emnify.net/api/doc/event.html#endpoint-object)). This name will often link to the device's entry on the "Connected Devices" page.
- **Operator**: Which [Mobile Network Operator (MNO)](https://www.emnify.com/iot-glossary/mno) the device is currently roaming on (e.g., Vodafone, AT&T).
Only listed for relevant network events.
- **Country**: The country where the MNO listed in the `Operator` field is providing the cellular service.
- **ID**: A generated unique identifier for the event.
- **Description**: What happened, why (in some cases), and any additional details associated with the event type.

<img
  src={require('./assets/portal-dashboard-event-details.png').default}
  alt=""
/>