---
description: Step-by-step guide for installing and using the SDK
---

# Getting started with the emnify Python SDK

## Installation

The emnify Python SDK is open-source and the [source code is available on GitHub](https://github.com/emnify/emnify-sdk-python).

### Prerequisites

- Python ([version 3.6.0](https://www.python.org/downloads/release/python-360/) or higher)

### Install from source code

```shell
git clone https://github.com/emnify/emnify-sdk-python.git
cd emnify-sdk-python
python setup.py install
```

### Install with pip

The emnify Python SDK is also available on [PyPI as `emnify-sdk`](https://pypi.org/project/emnify-sdk/):

```shell
pip install emnify-sdk
```

## Configuration

### Create an application token

To use the Python SDK, you need to create an application token. 
You can do this via the [**Integrations** page of the emnify Portal](https://portal.emnify.com/integrations) or the [emnify REST API](https://www.emnify.com/developer-blog/how-to-use-an-application-token-for-api-authentication).

Once created, you'll apply it to initiate the SDK.

### Using the SDK

```python
TOKEN = '<PASTE YOUR APPLICATION TOKEN HERE>'

# Import the package
from emnify import EMnify

# Initiate the SDK instance using your application token
emnify = EMnify(TOKEN)

# Execute a command against the desired API
devices = emnify.devices.get_devices_list()

# Show all the devices
print([device for device in devices])
```

## Explore more 

Now that you have the SDK configured, it's time to learn what you can do with it.

If you're new to IoT connectivity and emnify, start by learning the [common terminology and concepts](/sdks/concepts). 

Once you're comfortable with these [concepts](/sdks/concepts), you can explore some use cases that show what the SDK is capable of based on a few [Examples](examples). 

Also, see the [*emnify System Documentation*](https://cdn.emnify.net/api/doc/index.html) and our [OpenAPI Specification](https://cdn.emnify.net/api/doc/swagger.html).
