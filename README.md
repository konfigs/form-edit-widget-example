This is an example that demonstrates how the form-edit-widget can be used in our app

# To start the example

## Clone the example app

## run npm start

## Add Confguration data

In src/app.js you need to add api-key, node-id and application-id

```

<div id="enki-widget" api-key="YOUR_APIKEY" node-id="YOUR-NODE-ID" application-id="YOUR-APPLICATION-ID" ></div>

```

# To embed the widget in your react app do the following

## widget script

in the htmil body add the following scripts

```

<script src="https://konfigs.github.io/form-eidt-widget/index.js"></script>

    <script>
      window.addEventListener("DOMContentLoaded", function (event) {
        window.activateFormEditWidget();
      });
    </script>

```

## Inside your component

### First add the useEffect

To initate the widget call window.activateFormEditWidget(); inside your component

```
function WidgetComponent() { useEffect(() => { window.activateFormEditWidget(); }, []);

```

### Add the html element fot the widget

Then add

```

<div
  id="form-edit-config"
  api-key="YOUR-APIKEY"
  node-id="YOUR-NODE-ID"
  application-id="YOUR-APPLICATION-ID"
></div>

```

## The code will look like this

```

import React, { useEffect } from "react";
function WidgetComponent() {
  useEffect(() => {
    window.activateFormEditWidget();
  }, []);
  return (
    <div>
     <div
        id="form-edit-config"
        api-key="YOUR-APIKEY"
        node-id="YOUR-NODE-ID"
        application-id="YOUR-APPLICATION-ID"
    ></div>
    </div>
  );
}

export default WidgetComponent;

```
