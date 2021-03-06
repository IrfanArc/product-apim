/**
 * Copyright (c) 2016, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
define(['diagram_core', './processor'], function (DiagramCore, Processor) {

    var DynamicContainableProcessor = Processor.extend(
        /** @lends DiagramElement.prototype */
        {

            selectedNode: null,
            /**
             * @augments DiagramElement
             * @constructs
             * @class Element represents the model for elements in a diagram.
             */
            initialize: function (attrs, options) {
                Processor.prototype.initialize.call(this, attrs, options);
            },

            modelName: "DynamicContainableProcessor",

            idAttribute: this.cid,

            defaults: {
                centerPoint: new DiagramCore.Models.Point({x: 0, y: 0}),
                title: "DynamicContainableProcessor"
            }
        });

    return DynamicContainableProcessor;
});

