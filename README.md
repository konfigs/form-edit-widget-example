This is an example that demonstrates how the form-edit-widget can be used in our app

# To start the example

## Clone the example app

## run npm start


# To embed the widget in your react app do the following

## widget script

in the html body add the following scripts

```

<script src="https://konfigs.github.io/form-edit-config/index.js"></script>

    <script>
      window.addEventListener("DOMContentLoaded", function (event) {
        window.activateFormEditWidget();
      });
    </script>

```

## Inside your component

### First add the useEffect

To initiate  the widget call window.activateFormEditWidget(); inside your component

```
function WidgetComponent() { useEffect(() => { window.activateFormEditWidget(); }, []);

```

### Add the html element for the widget

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
