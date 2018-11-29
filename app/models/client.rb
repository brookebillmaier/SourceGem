class Client
  #connect to heroku / postgres
  if(ENV['DATABASE_URL'])
    uri = URI.parse(ENV['DATABASE_URL'])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
      DB = PG.connect(host: "localhost", port: 5432, dbname: 'SourceGem_development')
  end

  #prepared statements

  def initialize(opts ={}, id=nil)
      @id = id.to_i,
      @name = opts["name"]
      @industry = opts["industry"]
      @slogan = opts["slogan"]
      @type = opts["type"]
      @logo = opts["logo"]
    end


  DB.prepare("create_client",
    <<-SQL
        INSERT INTO clients (name, industry, slogan, type, logo)
        VALUES ( $1, $2, $3, $4, $5 )
        RETURNING id, name, industry, slogan, type, logo;
    SQL
  )

  DB.prepare("delete_client",
  "DELETE FROM clients WHERE id=$1 RETURNING id;"
  )

  DB.prepare("find_client",
    <<-SQL
        SELECT *
        FROM clients
        WHERE clients.id=$1;
    SQL
  )

  DB.prepare("update_client",
    <<-SQL
        UPDATE clients
        SET name=$2, industry=$3, slogan=$4, type=$5, logo=$6
        WHERE id=$1
        RETURNING id, name, industry, slogan, type, logo;
    SQL
  )


def self.all
  results = DB.exec("SELECT * FROM clients;")
  return results.map do |result|
    {
      "id" => result["id"].to_i,
      "name"=> result["name"],
      "industry" => result["industry"],
      "slogan" => result["slogan"],
      "type" => result["type"],
      "logo" => result["logo"],
    }
  end
end

def self.find(id)
  result = DB.exec("SELECT * FROM clients WHERE id=#{id};")
  return {
      "id" => result.first["id"].to_i,
      "name"=> result.first["name"],
      "industry" => result.first["industry"],
      "slogan" => result.first["slogan"],
      "type" => result.first["type"],
      "logo" => result.first["logo"],
  }
end


def self.create(opts)
  results = DB.exec(
    <<-SQL
      INSERT INTO clients (name, industry, slogan, type, logo)
      VALUES ('#{opts["name"]}', '#{opts["industry"]}', '#{opts["slogan"]}', '#{opts["type"]}', '#{opts["logo"]}')
      RETURNING id, name, industry, slogan, type, logo;
      SQL
  )
  return {
      "id" => results.first["id"].to_i,
      "name"=> results.first["name"],
      "industry" => results.first["industry"],
      "slogan" => results.first["slogan"],
      "type" => results.first["type"],
      "logo" => results.first["logo"],
  }
end


def self.delete(id)
  results = DB.exec("DELETE FROM clients WHERE id=#{id};")
  return {"deleted" => true}
end


def self.update(id, opts)
  results = DB.exec(
    <<-SQL
      UPDATE clients
      SET name='#{opts["name"]}',
      industry='#{opts["industry"]}',
      slogan='#{opts["slogan"]}',
      type='#{opts["type"]}',
      logo='#{opts["logo"]}'
      WHERE id=#{id}
      RETURNING id, name, industry, slogan, type, logo;
    SQL
  )
  return {
      "id" => results.first["id"].to_i,
      "name"=> results.first["name"],
      "industry" => results.first["industry"],
      "slogan" => results.first["slogan"],
      "type" => results.first["type"],
      "logo" => results.first["logo"],
    }
  end

end
