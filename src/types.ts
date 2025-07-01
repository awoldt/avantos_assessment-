/* eslint-disable @typescript-eslint/no-explicit-any */

// all these are based off the "graph.json" file in the github repo

interface Position {
  x: number;
  y: number;
}

interface SlaDuration {
  number: number;
  unit: string;
}

interface NodeData {
  id: string;
  component_key: string;
  component_type: string;
  component_id: string;
  name: string;
  prerequisites: string[];
  permitted_roles: string[];
  input_mapping: Record<string, unknown>;
  sla_duration: SlaDuration;
  approval_required: boolean;
  approval_roles: string[];
}

export interface Node {
  id: string;
  type: string;
  position: Position;
  data: NodeData;
}

export interface Edge {
  source: string;
  target: string;
}

interface FormFieldSchema {
  type: string;
  format?: string;
  title?: string;
  items?: {
    enum: string[];
    type: string;
  };
  enum?: { title: string }[] | null;
  uniqueItems?: boolean;
  avantos_type: string;
}

interface FormSchema {
  type: string;
  properties: Record<string, FormFieldSchema>;
  required: string[];
}

interface UiElement {
  type: string;
  scope: string;
  label: string;
  options?: Record<string, unknown>;
}

interface UiSchema {
  type: string;
  elements: UiElement[];
}

interface DynamicFieldPayload {
  type: string;
  value: string;
}

interface DynamicFieldConfig {
  selector_field: string;
  payload_fields: Record<string, DynamicFieldPayload>;
  endpoint_id: string;
}

export interface Form {
  id: string;
  name: string;
  description: string;
  is_reusable: boolean;
  field_schema: FormSchema;
  ui_schema: UiSchema;
  dynamic_field_config: Record<string, DynamicFieldConfig>;
}

export interface MockApiResponse {
  $schema: string;
  id: string;
  tenant_id: string;
  name: string;
  description: string;
  category: string;
  nodes: Node[];
  edges: Edge[];
  forms: Form[];
  
  // both below are empty for some reason in the mock json data
  branches: any[];
  triggers: any[];
}
