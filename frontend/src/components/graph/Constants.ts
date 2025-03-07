// Copyright 2021 The Kubeflow Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Being used as the base interace for Node and Edge in Reactflow.
export interface FlowElementDataBase {
  label: string;
  [key: string]: any;
}

export interface SubDagFlowElementData extends FlowElementDataBase {
  // Callback action if a SubDag expand button is clicked.
  expand: (nodeKey: string) => void;
}
